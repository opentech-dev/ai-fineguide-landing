<?php
/**
 * Plugin Name: Fix WP Hooks
 * Description: Fixes the "Cannot read properties of undefined (reading 'hooks')" error in subdirectory installations
 * Version: 1.0
 * Author: Cascade AI
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue the wp-hooks script before any script that might depend on it
 */
function fix_wp_hooks_enqueue_scripts() {
    // Register and enqueue our custom fix first
    wp_register_script('fix-wp-hooks', plugin_dir_url(__FILE__) . 'fix-wp-hooks.js', array(), '1.0', false);
    wp_enqueue_script('fix-wp-hooks');
    
    // Then load the actual hooks script
    wp_enqueue_script('wp-hooks', includes_url('js/dist/hooks.min.js'), array('wp-polyfill', 'fix-wp-hooks'), false, false);
    
    // Add inline script to ensure window.wp exists
    wp_add_inline_script('wp-hooks', 'window.wp = window.wp || {};', 'before');
}
add_action('wp_enqueue_scripts', 'fix_wp_hooks_enqueue_scripts', 1);

/**
 * Fix for admin area as well
 */
function fix_wp_hooks_admin_enqueue_scripts() {
    // Register and enqueue our custom fix first
    wp_register_script('fix-wp-hooks', plugin_dir_url(__FILE__) . 'fix-wp-hooks.js', array(), '1.0', false);
    wp_enqueue_script('fix-wp-hooks');
    
    // Then load the actual hooks script
    wp_enqueue_script('wp-hooks', includes_url('js/dist/hooks.min.js'), array('wp-polyfill', 'fix-wp-hooks'), false, false);
    
    // Add inline script to ensure window.wp exists
    wp_add_inline_script('wp-hooks', 'window.wp = window.wp || {};', 'before');
}
add_action('admin_enqueue_scripts', 'fix_wp_hooks_admin_enqueue_scripts', 1);

/**
 * Add script directly to head for maximum compatibility
 */
function fix_wp_hooks_print_scripts() {
    echo '<script>
    // Ensure window.wp exists
    window.wp = window.wp || {};
    // Ensure window.wp.hooks exists with basic functionality
    window.wp.hooks = window.wp.hooks || {};
    </script>';
}
add_action('wp_head', 'fix_wp_hooks_print_scripts', 0);
add_action('admin_head', 'fix_wp_hooks_print_scripts', 0);
