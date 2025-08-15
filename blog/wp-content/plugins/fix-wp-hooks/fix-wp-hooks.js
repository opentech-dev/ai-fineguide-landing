/**
 * Fix for WordPress hooks in subdirectory installations
 */
(function() {
    // Ensure window.wp exists
    window.wp = window.wp || {};
    
    // Ensure window.wp.hooks exists
    window.wp.hooks = window.wp.hooks || {
        // Implement basic hooks functionality
        actions: {},
        filters: {},
        
        // Add action
        addAction: function(name, callback, priority) {
            this.actions[name] = this.actions[name] || [];
            this.actions[name].push({callback: callback, priority: priority || 10});
            return this;
        },
        
        // Do action
        doAction: function(name) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (this.actions[name]) {
                this.actions[name].sort(function(a, b) {
                    return a.priority - b.priority;
                }).forEach(function(hook) {
                    hook.callback.apply(null, args);
                });
            }
            return this;
        },
        
        // Add filter
        addFilter: function(name, callback, priority) {
            this.filters[name] = this.filters[name] || [];
            this.filters[name].push({callback: callback, priority: priority || 10});
            return this;
        },
        
        // Apply filters
        applyFilters: function(name, value) {
            var args = Array.prototype.slice.call(arguments, 1);
            if (this.filters[name]) {
                this.filters[name].sort(function(a, b) {
                    return a.priority - b.priority;
                }).forEach(function(hook) {
                    args[0] = hook.callback.apply(null, args);
                });
            }
            return args[0];
        }
    };
    
    console.log('WordPress hooks polyfill loaded');
})();
