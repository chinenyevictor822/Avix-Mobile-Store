// ============================================
// AVIX - DARK MODE TOGGLE
// ============================================
// 🌙 This file handles dark mode:
//    - Toggle between light and dark
//    - Saves your preference in localStorage
//    - Automatically applies when you reload the page
//    - Works on all pages

// ============================================
// 📦 LOAD SAVED THEME
// ============================================

// Check if dark mode was saved before
function loadDarkMode() {
    const savedTheme = localStorage.getItem('avixTheme');
    
    // If dark mode was saved, apply it
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateToggleButton(true);
        return true;
    } else {
        // Default to light mode
        document.documentElement.setAttribute('data-theme', 'light');
        updateToggleButton(false);
        return false;
    }
}

// ============================================
// 🔄 TOGGLE DARK MODE
// ============================================

// Toggle dark mode on/off
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Switch to light mode
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('avixTheme', 'light');
        updateToggleButton(false);
        console.log('☀️ Switched to Light Mode');
    } else {
        // Switch to dark mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('avixTheme', 'dark');
        updateToggleButton(true);
        console.log('🌙 Switched to Dark Mode');
    }
}

// ============================================
// 🎨 UPDATE TOGGLE BUTTON
// ============================================

// Update the toggle button icon and title
function updateToggleButton(isDark) {
    const toggleBtn = document.getElementById('darkToggle');
    if (toggleBtn) {
        if (isDark) {
            toggleBtn.textContent = '☀️';  // Sun icon - click to go to light mode
            toggleBtn.title = 'Switch to Light Mode';
            toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
        } else {
            toggleBtn.textContent = '🌙';   // Moon icon - click to go to dark mode
            toggleBtn.title = 'Switch to Dark Mode';
            toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
        }
    }
}

// ============================================
// 🚀 SETUP DARK MODE
// ============================================

// Setup dark mode toggle when page loads
function setupDarkMode() {
    const toggleBtn = document.getElementById('darkToggle');
    if (toggleBtn) {
        // Remove any existing event listeners to avoid duplicates
        toggleBtn.removeEventListener('click', toggleDarkMode);
        toggleBtn.addEventListener('click', toggleDarkMode);
        console.log('🌓 Dark mode toggle ready!');
    } else {
        console.warn('⚠️ Dark mode toggle button not found on this page');
    }
    
    // Load the saved theme
    loadDarkMode();
}

// ============================================
// 🔄 AUTO-DETECT SYSTEM PREFERENCE (Bonus)
// ============================================

// Optional: Detect if user prefers dark mode on their device
// This runs only if no theme was saved before
function detectSystemPreference() {
    const savedTheme = localStorage.getItem('avixTheme');
    
    // Only if no theme is saved
    if (!savedTheme) {
        // Check if system prefers dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // User prefers dark mode on their device
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('avixTheme', 'dark');
            updateToggleButton(true);
            console.log('🌙 System preference detected: Dark Mode');
            return true;
        } else {
            console.log('☀️ System preference detected: Light Mode');
            return false;
        }
    }
    return false;
}

// ============================================
// 📝 INITIALIZE
// ============================================

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Setup the dark mode toggle
    setupDarkMode();
    
    // Check for system preference (only if no saved theme)
    // Comment this out if you don't want auto-detection
    const savedTheme = localStorage.getItem('avixTheme');
    if (!savedTheme) {
        detectSystemPreference();
    }
    
    console.log('🌓 Dark mode system ready!');
});

// ============================================
// 🧪 TEST FUNCTIONS (for console testing)
// ============================================

// Test: Get current theme
function getCurrentTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    console.log('📊 Current theme:', theme);
    return theme;
}

// Test: Reset theme preference (clear saved theme)
function resetThemePreference() {
    localStorage.removeItem('avixTheme');
    document.documentElement.setAttribute('data-theme', 'light');
    updateToggleButton(false);
    console.log('🔄 Theme preference reset to Light Mode');
    console.log('💡 Refresh the page to test system preference detection');
}

// Make functions available globally
window.toggleDarkMode = toggleDarkMode;
window.getCurrentTheme = getCurrentTheme;
window.resetThemePreference = resetThemePreference;

console.log('🌓 dark-mode.js loaded successfully!');
console.log('💡 Try typing: toggleDarkMode() in the console to test!');