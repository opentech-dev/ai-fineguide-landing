<?php
/**
 * Custom FineGuide.ai header template
 * 
 * This template matches the header from the main FineGuide.ai website
 * 
 * @package Astra
 * @since 1.0.0
 */
?>

<!-- Start Navbar -->
<nav id="fineguide-topnav" class="defaultscroll is-sticky">
    <div class="container">
        <!-- Logo container-->
        <a class="logo" href="/">
            <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/fineguide/logo-white.svg'); ?>" alt="FineGuide Logo">
        </a>
        <!-- End Logo container-->

        <div id="navigation">
            <!-- Navigation Menu-->   
            <ul class="navigation-menu">
                <li><a href="https://fineguide.ai/" class="sub-menu-item">Ai Agents</a></li>
                <li><a href="https://fineguide.ai/voice-qa" class="sub-menu-item">VoiceQA</a></li>
                <li><a href="https://fineguide.ai/pricing" class="sub-menu-item">Pricing</a></li>
                <li><a href="<?php echo esc_url(home_url('/')); ?>" class="sub-menu-item active">Blog</a></li>
                <li><a href="https://community.fineguide.ai" class="sub-menu-item">Community</a></li>
            </ul><!--end navigation menu-->
        </div><!--end navigation-->
        
        <!-- Start Mobile Toggle -->
        <div class="menu-extras">
            <div class="menu-item">
                <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                    <div class="lines">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </div>
        </div>
        <!-- End Mobile Toggle -->

        <!--Login button Start-->
        <ul class="buy-button list-none mb-0">
            <li class="inline mb-0">
                <a href="https://app.fineguide.ai/login">
                    <span class="login-button">Login</span>
                </a>
            </li>
            
            <li class="signup-li">
                <a href="https://app.fineguide.ai/register" target="_blank" class="signup-button">Signup</a>
            </li>  
        </ul>
        <!--Login button End-->
    </div><!--end container-->
</nav><!--end header-->
<!-- End Navbar -->

<!-- Background Elements -->
<div class="header-background">
    <!-- Ambient Gradients -->
    <div class="ambient-gradient"></div>
    <div class="ambient-gradient-1"></div>
    <div class="ambient-gradient-2"></div>
    
    <!-- Orbital Rings -->
    <div class="orbital-ring-1"></div>
    <div class="orbital-ring-2"></div>
    
    <!-- Particle Grid -->
    <div class="particle-grid">
        <svg width="100%" height="100%" class="opacity-20">
            <pattern id="grid-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.3)" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
    </div>
</div>

<script>
function toggleMenu() {
    const navigation = document.getElementById('navigation');
    navigation.classList.toggle('open');
}
</script>
