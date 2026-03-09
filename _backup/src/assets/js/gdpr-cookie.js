// GDPR Cookie Consent JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons for the GDPR popup
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // DOM Elements
    const gdprPopup = document.getElementById('gdpr-popup');
    const acceptAllBtn = document.getElementById('accept-all-cookies');
    const rejectAllBtn = document.getElementById('reject-all-cookies');
    const cookieSettingsBtn = document.getElementById('cookie-settings');
    const cookieSettingsModal = document.getElementById('cookie-settings-modal');
    const closeSettingsBtn = document.getElementById('close-settings');
    const savePreferencesBtn = document.getElementById('save-preferences');
    const cancelSettingsBtn = document.getElementById('cancel-settings');
    
    // Cookie names
    const COOKIE_CONSENT = 'mortalai_cookie_consent';
    const ANALYTICS_CONSENT = 'mortalai_analytics_consent';
    const MARKETING_CONSENT = 'mortalai_marketing_consent';
    const PREFERENCE_CONSENT = 'mortalai_preference_consent';
    
    // Cookie checkboxes
    const analyticsCheckbox = document.getElementById('analytics-cookies');
    const marketingCheckbox = document.getElementById('marketing-cookies');
    const preferenceCheckbox = document.getElementById('preference-cookies');
    
    // Check if consent has been given before
    function hasConsent() {
        return getCookie(COOKIE_CONSENT) !== '';
    }
    
    // Get cookie value
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return '';
    }
    
    // Set cookie with expiry date
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
    }
    
    // Show the GDPR popup if consent hasn't been given
    if (!hasConsent()) {
        gdprPopup.classList.remove('hidden');
    }
    
    // Load saved preferences into checkboxes
    function loadSavedPreferences() {
        // If cookies don't exist yet (first visit), default to checked
        // Otherwise use the saved preferences
        const analyticsCookie = getCookie(ANALYTICS_CONSENT);
        const marketingCookie = getCookie(MARKETING_CONSENT);
        const preferenceCookie = getCookie(PREFERENCE_CONSENT);
        
        analyticsCheckbox.checked = analyticsCookie === '' ? true : analyticsCookie === 'true';
        marketingCheckbox.checked = marketingCookie === '' ? true : marketingCookie === 'true';
        preferenceCheckbox.checked = preferenceCookie === '' ? true : preferenceCookie === 'true';
    }
    
    // Accept all cookies
    function acceptAllCookies() {
        setCookie(COOKIE_CONSENT, 'true', 365);
        setCookie(ANALYTICS_CONSENT, 'true', 365);
        setCookie(MARKETING_CONSENT, 'true', 365);
        setCookie(PREFERENCE_CONSENT, 'true', 365);
        gdprPopup.classList.add('hidden');
        cookieSettingsModal.classList.add('hidden');
        
        // You can add code here to initialize analytics, marketing scripts, etc.
        enableAllCookieServices();
    }
    
    // Reject all cookies
    function rejectAllCookies() {
        setCookie(COOKIE_CONSENT, 'false', 365);
        setCookie(ANALYTICS_CONSENT, 'false', 365);
        setCookie(MARKETING_CONSENT, 'false', 365);
        setCookie(PREFERENCE_CONSENT, 'false', 365);
        gdprPopup.classList.add('hidden');
        cookieSettingsModal.classList.add('hidden');
        
        // Disable all non-essential cookie services
        disableAllCookieServices();
    }
    
    // Save cookie preferences
    function savePreferences() {
        setCookie(COOKIE_CONSENT, 'true', 365);
        setCookie(ANALYTICS_CONSENT, analyticsCheckbox.checked.toString(), 365);
        setCookie(MARKETING_CONSENT, marketingCheckbox.checked.toString(), 365);
        setCookie(PREFERENCE_CONSENT, preferenceCheckbox.checked.toString(), 365);
        gdprPopup.classList.add('hidden');
        cookieSettingsModal.classList.add('hidden');
        
        // Enable/disable services based on preferences
        updateCookieServices();
    }
    
    // Enable all cookie services
    function enableAllCookieServices() {
        // Example: Enable Google Analytics
        if (typeof window.enableGoogleAnalytics === 'function') {
            window.enableGoogleAnalytics();
        }
        
        // Example: Enable marketing cookies
        if (typeof window.enableMarketingCookies === 'function') {
            window.enableMarketingCookies();
        }
        
        // Add more service initializations as needed
    }
    
    // Disable all non-essential cookie services
    function disableAllCookieServices() {
        // Example: Disable Google Analytics
        if (typeof window.disableGoogleAnalytics === 'function') {
            window.disableGoogleAnalytics();
        }
        
        // Example: Disable marketing cookies
        if (typeof window.disableMarketingCookies === 'function') {
            window.disableMarketingCookies();
        }
        
        // Add more service disabling as needed
    }
    
    // Update cookie services based on preferences
    function updateCookieServices() {
        // Analytics
        if (analyticsCheckbox.checked) {
            if (typeof window.enableGoogleAnalytics === 'function') {
                window.enableGoogleAnalytics();
            }
        } else {
            if (typeof window.disableGoogleAnalytics === 'function') {
                window.disableGoogleAnalytics();
            }
        }
        
        // Marketing
        if (marketingCheckbox.checked) {
            if (typeof window.enableMarketingCookies === 'function') {
                window.enableMarketingCookies();
            }
        } else {
            if (typeof window.disableMarketingCookies === 'function') {
                window.disableMarketingCookies();
            }
        }
        
        // Preferences
        if (preferenceCheckbox.checked) {
            if (typeof window.enablePreferenceCookies === 'function') {
                window.enablePreferenceCookies();
            }
        } else {
            if (typeof window.disablePreferenceCookies === 'function') {
                window.disablePreferenceCookies();
            }
        }
    }
    
    // Event Listeners
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', acceptAllCookies);
    }
    
    if (rejectAllBtn) {
        rejectAllBtn.addEventListener('click', rejectAllCookies);
    }
    
    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', function() {
            loadSavedPreferences();
            gdprPopup.classList.add('hidden');
            cookieSettingsModal.classList.remove('hidden');
        });
    }
    
    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', function() {
            cookieSettingsModal.classList.add('hidden');
            if (!hasConsent()) {
                gdprPopup.classList.remove('hidden');
            }
        });
    }
    
    if (savePreferencesBtn) {
        savePreferencesBtn.addEventListener('click', savePreferences);
    }
    
    if (cancelSettingsBtn) {
        cancelSettingsBtn.addEventListener('click', function() {
            cookieSettingsModal.classList.add('hidden');
            if (!hasConsent()) {
                gdprPopup.classList.remove('hidden');
            }
        });
    }
    
    // Public API
    window.MortalAiCookies = {
        showSettings: function() {
            loadSavedPreferences();
            cookieSettingsModal.classList.remove('hidden');
        },
        hasAnalyticsConsent: function() {
            return getCookie(ANALYTICS_CONSENT) === 'true';
        },
        hasMarketingConsent: function() {
            return getCookie(MARKETING_CONSENT) === 'true';
        },
        hasPreferenceConsent: function() {
            return getCookie(PREFERENCE_CONSENT) === 'true';
        }
    };
});
