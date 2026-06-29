// ============================================
// AVIX - 3D PRODUCT ROTATION
// ============================================
// 🌀 This file makes products spin when you drag them!
//    Like on Apple's website — you can see the phone from all angles
//
// HOW IT WORKS:
// 1. You click and drag the product image left or right
// 2. The image rotates smoothly in 3D
// 3. It also auto-rotates slowly when you're not touching it
// 4. Works on both desktop (mouse) and mobile (touch)

// ============================================
// 📦 VARIABLES
// ============================================

let isDragging = false;        // Is the user currently dragging?
let startX = 0;                // Where did the drag start?
let currentRotation = 0;       // Current rotation angle in degrees
let rotationSpeed = 0.5;       // How fast the image rotates (lower = slower)
let autoRotateInterval = null; // Stores the auto-rotation timer
let isAutoRotating = true;     // Is auto-rotation on?

// ============================================
// 🖱️ SETUP 3D ROTATION
// ============================================

// This function sets up all the rotation controls
function setup3DRotation() {
    // Find the image container and the image itself
    const imageContainer = document.getElementById('productImageContainer');
    const productImage = document.getElementById('productImage');
    
    // If these elements don't exist on this page, stop (no error)
    if (!imageContainer || !productImage) {
        console.log('🔄 3D Rotation: No product image found on this page');
        return;
    }
    
    console.log('🔄 3D Rotation: Setup started!');
    
    // Set initial rotation
    productImage.style.transform = `rotateY(0deg)`;
    productImage.style.transition = 'transform 0.5s ease';
    
    // ============================================
    // 🖱️ MOUSE EVENTS (Desktop)
    // ============================================
    
    // When user clicks and holds on the image
    imageContainer.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        imageContainer.style.cursor = 'grabbing';
        
        // Stop auto-rotation when user interacts
        stopAutoRotation();
        
        // Remove transition for smooth dragging
        productImage.style.transition = 'none';
    });
    
    // When user moves the mouse while holding (drag)
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        // Calculate how far the mouse moved
        const deltaX = e.clientX - startX;
        
        // Rotate the image based on mouse movement
        const newRotation = currentRotation + deltaX * rotationSpeed;
        productImage.style.transform = `rotateY(${newRotation}deg)`;
    });
    
    // When user releases the mouse button
    document.addEventListener('mouseup', function(e) {
        if (isDragging) {
            isDragging = false;
            imageContainer.style.cursor = 'grab';
            
            // Save the current rotation
            currentRotation = currentRotation + (e.clientX - startX) * rotationSpeed;
            
            // Smooth transition when stopping
            productImage.style.transition = 'transform 0.3s ease';
            productImage.style.transform = `rotateY(${currentRotation}deg)`;
            
            // Restart auto-rotation after 3 seconds of inactivity
            setTimeout(() => {
                if (!isDragging) {
                    startAutoRotation();
                }
            }, 3000);
        }
    });
    
    // ============================================
    // 📱 TOUCH EVENTS (Mobile)
    // ============================================
    
    let touchStartX = 0;
    
    // When user touches the image
    imageContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        
        // Stop auto-rotation
        stopAutoRotation();
        
        // Remove transition for smooth dragging
        productImage.style.transition = 'none';
    });
    
    // When user moves finger while touching (drag)
    imageContainer.addEventListener('touchmove', function(e) {
        if (!isDragging) return;
        
        // Prevent scrolling while rotating
        e.preventDefault();
        
        const touchDeltaX = e.touches[0].clientX - touchStartX;
        const newRotation = currentRotation + touchDeltaX * rotationSpeed;
        productImage.style.transform = `rotateY(${newRotation}deg)`;
    });
    
    // When user lifts finger
    imageContainer.addEventListener('touchend', function(e) {
        if (isDragging) {
            isDragging = false;
            
            // Save the current rotation
            // Get the current transform value
            const transform = productImage.style.transform;
            if (transform) {
                const match = transform.match(/rotateY\(([^)]+)deg\)/);
                if (match) {
                    currentRotation = parseFloat(match[1]);
                }
            }
            
            // Smooth transition when stopping
            productImage.style.transition = 'transform 0.3s ease';
            productImage.style.transform = `rotateY(${currentRotation}deg)`;
            
            // Restart auto-rotation after 3 seconds
            setTimeout(() => {
                if (!isDragging) {
                    startAutoRotation();
                }
            }, 3000);
        }
    });
    
    // ============================================
    // 🌀 START AUTO-ROTATION
    // ============================================
    
    // Start auto-rotation after a short delay
    setTimeout(() => {
        startAutoRotation();
    }, 1000);
    
    console.log('🔄 3D Rotation: Ready! Drag the product image to rotate it.');
}

// ============================================
// 🌀 AUTO-ROTATION FUNCTIONS
// ============================================

// Start auto-rotation (image spins slowly by itself)
function startAutoRotation() {
    // Don't start if already running or if user is dragging
    if (autoRotateInterval || isDragging) return;
    
    const productImage = document.getElementById('productImage');
    if (!productImage) return;
    
    isAutoRotating = true;
    console.log('🔄 Auto-rotation started');
    
    // Rotate the image every 50ms (20 times per second)
    autoRotateInterval = setInterval(() => {
        // Only rotate if user is not dragging
        if (!isDragging) {
            currentRotation += 0.3; // Slowly increase rotation
            productImage.style.transition = 'transform 0.5s ease';
            productImage.style.transform = `rotateY(${currentRotation}deg)`;
        }
    }, 50);
}

// Stop auto-rotation
function stopAutoRotation() {
    if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
        isAutoRotating = false;
        console.log('🔄 Auto-rotation stopped');
    }
}

// ============================================
// 🔄 RESET ROTATION (Bonus feature)
// ============================================

// Reset the product to face forward (0 degrees)
function resetRotation() {
    const productImage = document.getElementById('productImage');
    if (!productImage) return;
    
    currentRotation = 0;
    productImage.style.transition = 'transform 0.8s ease';
    productImage.style.transform = `rotateY(0deg)`;
    
    console.log('🔄 Rotation reset to 0°');
}

// ============================================
// 🧪 TEST FUNCTIONS (for console testing)
// ============================================

// Get current rotation angle
function getCurrentRotation() {
    console.log('📊 Current rotation:', currentRotation + '°');
    return currentRotation;
}

// Manually rotate to a specific angle
function setRotation(degrees) {
    const productImage = document.getElementById('productImage');
    if (!productImage) return;
    
    currentRotation = degrees;
    productImage.style.transition = 'transform 0.5s ease';
    productImage.style.transform = `rotateY(${degrees}deg)`;
    console.log('🔄 Rotated to:', degrees + '°');
}

// ============================================
// 📝 INITIALIZE
// ============================================

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a product detail page (has product image)
    const productImage = document.getElementById('productImage');
    if (productImage) {
        // Small delay to let everything load
        setTimeout(setup3DRotation, 500);
    } else {
        console.log('🔄 3D Rotation: No product image on this page');
    }
});

// ============================================
// 🌐 MAKE FUNCTIONS GLOBALLY AVAILABLE
// ============================================

// Make functions available in the browser console for testing
window.startAutoRotation = startAutoRotation;
window.stopAutoRotation = stopAutoRotation;
window.resetRotation = resetRotation;
window.getCurrentRotation = getCurrentRotation;
window.setRotation = setRotation;

// ============================================
// 📝 DEBUG INFO
// ============================================

console.log('🌀 3d-rotation.js loaded successfully!');
console.log('💡 To test, go to product-detail.html or');
console.log('💡 Type: resetRotation() in the console');
console.log('💡 Type: setRotation(45) to rotate to 45°');