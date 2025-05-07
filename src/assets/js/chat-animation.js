document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
    
    // Get visualization containers
    const gradientWaves = document.getElementById('gradient-waves');
    const abstractShapes = document.getElementById('abstract-shapes');
    const businessTransformation = document.getElementById('business-transformation');
    const aiPatterns = document.getElementById('ai-patterns');
    const transformationParticles = document.getElementById('transformation-particles');
    
    // If containers aren't found, exit
    if (!gradientWaves || !abstractShapes || !businessTransformation || !aiPatterns || !transformationParticles) return;
    
    // Configuration
    const config = {
        waves: 5,                // Number of gradient waves
        shapes: 12,              // Number of abstract shapes
        traditionalCells: 60,    // Number of traditional business cells
        aiPatterns: 20,          // Number of AI pattern elements
        particles: 30,           // Number of transformation particles
        canvasWidth: businessTransformation.offsetWidth,
        canvasHeight: businessTransformation.offsetHeight
    };
    
    // Color palettes
    const colors = {
        traditional: ['#64748b', '#475569', '#334155', '#1e293b'],
        ai: ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#0ea5e9']
    };
    
    // Create gradient waves
    function createGradientWaves() {
        for (let i = 0; i < config.waves; i++) {
            const wave = document.createElement('div');
            
            // Randomize wave properties
            const startPos = Math.random() * 100;
            const duration = 15 + Math.random() * 20; // 15-35s
            const delay = Math.random() * -15; // Random start position in animation
            
            // Create wave element
            wave.className = 'absolute inset-0 opacity-10';
            wave.style.background = `linear-gradient(${Math.random() * 360}deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2), rgba(217, 70, 239, 0.2))`;
            wave.style.transform = `translateY(${startPos}%)`;
            wave.style.animation = `wave ${duration}s infinite ease-in-out ${delay}s`;
            
            gradientWaves.appendChild(wave);
        }
    }
    
    // Create abstract shapes
    function createAbstractShapes() {
        for (let i = 0; i < config.shapes; i++) {
            const shape = document.createElement('div');
            
            // Randomize shape properties
            const size = 20 + Math.random() * 60; // 20-80px
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const opacity = 0.05 + Math.random() * 0.1; // 0.05-0.15
            const blur = 10 + Math.random() * 20; // 10-30px
            const colorIndex = Math.floor(Math.random() * colors.ai.length);
            
            // Create shape element
            shape.className = 'absolute rounded-full';
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${posX}%`;
            shape.style.top = `${posY}%`;
            shape.style.opacity = opacity;
            shape.style.background = colors.ai[colorIndex];
            shape.style.filter = `blur(${blur}px)`;
            
            // Add subtle animation
            const duration = 20 + Math.random() * 40; // 20-60s
            const delay = Math.random() * -20; // Random start position
            shape.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
            
            abstractShapes.appendChild(shape);
        }
    }
    
    // Create traditional business grid
    function createTraditionalBusinessGrid() {
        const gridContainer = businessTransformation.querySelector('.grid');
        
        if (!gridContainer) return;
        
        // Create grid cells
        for (let i = 0; i < config.traditionalCells; i++) {
            const cell = document.createElement('div');
            
            // Determine if cell is "active" in traditional business
            const isActive = Math.random() > 0.6;
            
            // Style based on active state
            if (isActive) {
                const colorIndex = Math.floor(Math.random() * colors.traditional.length);
                cell.className = 'rounded-sm';
                cell.style.background = colors.traditional[colorIndex];
            } else {
                cell.className = 'border border-slate-700/30 rounded-sm';
            }
            
            gridContainer.appendChild(cell);
        }
    }
    
    // Create AI-enhanced business patterns
    function createAIPatterns() {
        for (let i = 0; i < config.aiPatterns; i++) {
            const pattern = document.createElement('div');
            
            // Randomize pattern properties
            const type = Math.random() > 0.5 ? 'circle' : 'line';
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const colorIndex = Math.floor(Math.random() * colors.ai.length);
            const color = colors.ai[colorIndex];
            
            if (type === 'circle') {
                // Create circle pattern
                const size = 10 + Math.random() * 40; // 10-50px
                
                pattern.className = 'absolute rounded-full';
                pattern.style.width = `${size}px`;
                pattern.style.height = `${size}px`;
                pattern.style.left = `${posX}%`;
                pattern.style.top = `${posY}%`;
                pattern.style.border = `1px solid ${color}`;
                pattern.style.opacity = '0.3';
                
                // Add pulse animation
                if (Math.random() > 0.5) {
                    pattern.style.animation = 'pulse 3s infinite ease-in-out';
                }
            } else {
                // Create line pattern
                const length = 30 + Math.random() * 100; // 30-130px
                const angle = Math.random() * 360; // 0-360 degrees
                
                pattern.className = 'absolute';
                pattern.style.width = `${length}px`;
                pattern.style.height = '1px';
                pattern.style.left = `${posX}%`;
                pattern.style.top = `${posY}%`;
                pattern.style.background = `linear-gradient(90deg, ${color}00, ${color}, ${color}00)`;
                pattern.style.opacity = '0.3';
                pattern.style.transform = `rotate(${angle}deg)`;
                
                // Add subtle animation
                if (Math.random() > 0.5) {
                    const duration = 10 + Math.random() * 20; // 10-30s
                    pattern.style.animation = `rotate ${duration}s infinite linear`;
                }
            }
            
            aiPatterns.appendChild(pattern);
        }
    }
    
    // Create transformation particles
    function createTransformationParticles() {
        for (let i = 0; i < config.particles; i++) {
            setTimeout(() => {
                createParticle();
            }, i * 300); // Stagger creation
        }
    }
    
    function createParticle() {
        // Create particle element
        const particle = document.createElement('div');
        
        // Start position (from traditional side)
        const startY = Math.random() * 100;
        
        // Randomize particle properties
        const size = 1 + Math.random() * 3; // 1-4px
        const colorIndex = Math.floor(Math.random() * colors.ai.length);
        const speed = 2 + Math.random() * 3; // 2-5s
        
        // Style particle
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = '25%';
        particle.style.top = `${startY}%`;
        particle.style.background = colors.ai[colorIndex];
        particle.style.boxShadow = `0 0 ${size * 2}px ${colors.ai[colorIndex]}`;
        
        // Add to container
        transformationParticles.appendChild(particle);
        
        // Animate particle
        const keyframes = [
            { left: '25%', opacity: 0, transform: 'scale(0.5)' },
            { left: '50%', opacity: 1, transform: 'scale(1)' },
            { left: '75%', opacity: 0, transform: 'scale(0.5)' }
        ];
        
        const options = {
            duration: speed * 1000,
            easing: 'ease-in-out',
            fill: 'forwards'
        };
        
        // Start animation
        const animation = particle.animate(keyframes, options);
        
        // Remove particle when animation completes
        animation.onfinish = () => {
            transformationParticles.removeChild(particle);
            // Create a new particle
            setTimeout(createParticle, Math.random() * 1000);
        };
    }
    
    // Initialize 3D effect with mouse movement
    function initialize3DEffect() {
        const container = businessTransformation.parentElement;
        const maxRotation = 5; // Maximum rotation in degrees
        
        container.addEventListener('mousemove', (e) => {
            // Calculate mouse position relative to container center
            const rect = container.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX - centerX;
            const mouseY = e.clientY - centerY;
            
            // Calculate rotation based on mouse position
            const rotateY = (mouseX / rect.width) * maxRotation;
            const rotateX = -(mouseY / rect.height) * maxRotation;
            
            // Apply different rotation to each side for parallax effect
            const leftSide = businessTransformation.querySelector('.left-0');
            const rightSide = businessTransformation.querySelector('.right-0');
            
            if (leftSide && rightSide) {
                leftSide.style.transform = `rotateX(${rotateX * 0.8}deg) rotateY(${rotateY * 0.8}deg)`;
                rightSide.style.transform = `rotateX(${rotateX * 1.2}deg) rotateY(${rotateY * 1.2}deg)`;
            }
        });
        
        // Reset rotation when mouse leaves
        container.addEventListener('mouseleave', () => {
            const leftSide = businessTransformation.querySelector('.left-0');
            const rightSide = businessTransformation.querySelector('.right-0');
            
            if (leftSide && rightSide) {
                leftSide.style.transition = 'transform 1s ease-out';
                rightSide.style.transition = 'transform 1s ease-out';
                
                leftSide.style.transform = 'rotateX(0deg) rotateY(0deg)';
                rightSide.style.transform = 'rotateX(0deg) rotateY(0deg)';
                
                // Remove transition after animation completes
                setTimeout(() => {
                    leftSide.style.transition = '';
                    rightSide.style.transition = '';
                }, 1000);
            }
        });
    }
    
    // Add custom animation keyframes
    function addCustomAnimations() {
        const customStyles = `
            <style>
                @keyframes wave {
                    0%, 100% { transform: translateY(-30%) scale(1.5); }
                    50% { transform: translateY(130%) scale(1.5); }
                }
                
                @keyframes float {
                    0%, 100% { transform: translate(0, 0); }
                    25% { transform: translate(10px, 10px); }
                    50% { transform: translate(-5px, 15px); }
                    75% { transform: translate(-15px, -5px); }
                }
                
                @keyframes pulse {
                    0%, 100% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', customStyles);
    }
    
    // Initialize visualization
    function initVisualization() {
        // Add custom animations
        addCustomAnimations();
        
        // Create visualization elements
        createGradientWaves();
        createAbstractShapes();
        createTraditionalBusinessGrid();
        createAIPatterns();
        createTransformationParticles();
        
        // Add 3D effect
        initialize3DEffect();
    }
    
    // Start visualization
    initVisualization();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        // Update dimensions
        config.canvasWidth = businessTransformation.offsetWidth;
        config.canvasHeight = businessTransformation.offsetHeight;
        
        // Clear existing elements
        gradientWaves.innerHTML = '';
        abstractShapes.innerHTML = '';
        aiPatterns.innerHTML = '';
        transformationParticles.innerHTML = '';
        
        const gridContainer = businessTransformation.querySelector('.grid');
        if (gridContainer) {
            gridContainer.innerHTML = '';
        }
        
        // Reinitialize
        initVisualization();
    });
});
