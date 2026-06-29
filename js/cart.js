// ============================================
// AVIX - SHOPPING CART
// ============================================
// 🛒 This file handles everything about the cart:
//    - Add items
//    - Remove items
//    - Update quantity
//    - Calculate total
//    - Save to localStorage (so cart stays even after refresh)
//    - Choose pickup or delivery

// The cart is stored as an array of objects
// Each object: { productId: 1, quantity: 2, deliveryOption: 'pickup' }

let cart = [];

// ============================================
// 📦 CART STORAGE (localStorage)
// ============================================

// Load cart from localStorage when page loads
function loadCart() {
    const savedCart = localStorage.getItem('avixCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    } else {
        cart = [];
    }
    return cart;
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('avixCart', JSON.stringify(cart));
}

// Clear the entire cart
function clearCart() {
    cart = [];
    saveCart();
    updateCartCount();
    return cart;
}

// ============================================
// ➕ ADD TO CART
// ============================================

// Add a product to cart
function addToCart(productId, quantity = 1) {
    // Check if product is already in cart
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        // If yes, increase quantity
        existingItem.quantity += quantity;
    } else {
        // If no, add new item with default delivery option
        cart.push({
            productId: productId,
            quantity: quantity,
            deliveryOption: 'pickup' // default: pickup
        });
    }
    
    saveCart();
    updateCartCount();
    animateCartIcon();
    return cart;
}

// ============================================
// ❌ REMOVE FROM CART
// ============================================

// Remove a product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    updateCartCount();
    return cart;
}

// ============================================
// 🔢 UPDATE QUANTITY
// ============================================

// Update quantity of a product in cart
function updateQuantity(productId, newQuantity) {
    // If quantity is 0 or less, remove the item
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = newQuantity;
        saveCart();
        updateCartCount();
    }
    return cart;
}

// ============================================
// 🚚 DELIVERY OPTIONS
// ============================================

// Update delivery option for an item
// option: 'pickup' or 'delivery'
function updateDeliveryOption(productId, option) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.deliveryOption = option;
        saveCart();
    }
    return cart;
}

// Update delivery option for ALL items in cart
function updateAllDeliveryOptions(option) {
    cart.forEach(item => {
        item.deliveryOption = option;
    });
    saveCart();
    return cart;
}

// Get delivery option for a specific item
function getDeliveryOption(productId) {
    const item = cart.find(item => item.productId === productId);
    return item ? item.deliveryOption : 'pickup';
}

// ============================================
// 📊 CART CALCULATIONS
// ============================================

// Get total number of items in cart (sum of all quantities)
function getCartTotalItems() {
    let total = 0;
    cart.forEach(item => {
        total += item.quantity;
    });
    return total;
}

// Get cart items with full product details
function getCartItemsWithDetails() {
    const items = [];
    cart.forEach(cartItem => {
        const product = getProductById(cartItem.productId);
        if (product) {
            items.push({
                ...cartItem,
                product: product,
                subtotal: product.price * cartItem.quantity
            });
        }
    });
    return items;
}

// Get cart total price (sum of all subtotals)
function getCartTotal() {
    let total = 0;
    const items = getCartItemsWithDetails();
    items.forEach(item => {
        total += item.subtotal;
    });
    return total;
}

// Get cart total with delivery fee (if applicable)
function getCartTotalWithDelivery() {
    const subtotal = getCartTotal();
    const items = getCartItemsWithDetails();
    
    // Check if any item is marked for delivery
    const hasDelivery = items.some(item => item.deliveryOption === 'delivery');
    
    // If delivery is chosen, add ₦2,000 delivery fee
    // (Only if there are items in cart)
    if (hasDelivery && items.length > 0) {
        return subtotal + 2000;
    }
    
    return subtotal;
}

// Get delivery fee (₦2,000 if any item is for delivery)
function getDeliveryFee() {
    const items = getCartItemsWithDetails();
    const hasDelivery = items.some(item => item.deliveryOption === 'delivery');
    return (hasDelivery && items.length > 0) ? 2000 : 0;
}

// Check if any item in cart is for delivery
function hasDeliveryItems() {
    const items = getCartItemsWithDetails();
    return items.some(item => item.deliveryOption === 'delivery');
}

// ============================================
// 🖥️ UI UPDATES
// ============================================

// Update cart count badge (the number on the cart icon)
function updateCartCount() {
    const countElements = document.querySelectorAll('.cart-count');
    const total = getCartTotalItems();
    countElements.forEach(el => {
        el.textContent = total;
        if (total === 0) {
            el.style.display = 'none';
        } else {
            el.style.display = 'flex';
        }
    });
}

// Animate cart icon when adding item (bounce effect)
function animateCartIcon() {
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.classList.remove('cart-animate');
        // Force reflow to restart animation
        void cartIcon.offsetWidth;
        cartIcon.classList.add('cart-animate');
    }
}

// ============================================
// 🖨️ RENDER CART PAGE
// ============================================

// Render the cart page (shows all items in cart)
function renderCartPage() {
    const cartContainer = document.getElementById('cartItemsContainer');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartSummary = document.getElementById('cartSummary');
    const cartTotalElement = document.getElementById('cartTotal');
    const deliveryFeeElement = document.getElementById('deliveryFee');
    const finalTotalElement = document.getElementById('finalTotal');
    
    if (!cartContainer) return;
    
    const items = getCartItemsWithDetails();
    
    // Show empty message if cart is empty
    if (items.length === 0) {
        if (cartEmpty) cartEmpty.style.display = 'block';
        if (cartContainer) cartContainer.style.display = 'none';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }
    
    if (cartEmpty) cartEmpty.style.display = 'none';
    if (cartContainer) cartContainer.style.display = 'block';
    if (cartSummary) cartSummary.style.display = 'block';
    
    // Build the cart items HTML
    let html = '';
    items.forEach(item => {
        const product = item.product;
        html += `
            <div class="cart-item" data-product-id="${product.id}">
                <img src="${product.image}" alt="${product.name}" />
                <div class="item-info">
                    <h4>${product.name}</h4>
                    <p style="font-size: 13px; color: var(--text-secondary);">
                        ${product.brand} · ${product.condition === 'new' ? 'NEW' : 'REFURBISHED'}
                    </p>
                    <p style="font-weight: 700; color: var(--brand-orange);">
                        ${formatPrice(product.price)}
                    </p>
                </div>
                <div class="item-actions">
                    <button onclick="changeQuantity(${product.id}, -1)" aria-label="Decrease quantity">−</button>
                    <span class="qty">${item.quantity}</span>
                    <button onclick="changeQuantity(${product.id}, 1)" aria-label="Increase quantity">+</button>
                    <button class="remove" onclick="removeItem(${product.id})" aria-label="Remove item">✕</button>
                </div>
            </div>
        `;
    });
    
    cartContainer.innerHTML = html;
    
    // Update totals
    const subtotal = getCartTotal();
    const deliveryFee = getDeliveryFee();
    const total = getCartTotalWithDelivery();
    
    if (cartTotalElement) cartTotalElement.textContent = formatPrice(subtotal);
    if (deliveryFeeElement) deliveryFeeElement.textContent = formatPrice(deliveryFee);
    if (finalTotalElement) finalTotalElement.textContent = formatPrice(total);
}

// ============================================
// 🎯 CART ACTION FUNCTIONS (for buttons)
// ============================================

// Change quantity of an item in cart
function changeQuantity(productId, change) {
    const items = getCartItemsWithDetails();
    const item = items.find(i => i.productId === productId);
    if (item) {
        const newQty = item.quantity + change;
        updateQuantity(productId, newQty);
        renderCartPage();
        updateCartCount();
    }
}

// Remove an item from cart
function removeItem(productId) {
    if (confirm('Remove this item from cart?')) {
        removeFromCart(productId);
        renderCartPage();
        updateCartCount();
    }
}

// ============================================
// 🚚 DELIVERY TOGGLE (for cart page)
// ============================================

// Toggle delivery option for ALL items
function toggleDeliveryForAll(option) {
    // option: 'pickup' or 'delivery'
    updateAllDeliveryOptions(option);
    renderCartPage();
    updateCartCount();
    
    // Update the toggle buttons visually
    const pickupBtn = document.getElementById('pickupToggle');
    const deliveryBtn = document.getElementById('deliveryToggle');
    
    if (pickupBtn && deliveryBtn) {
        if (option === 'pickup') {
            pickupBtn.classList.add('active');
            deliveryBtn.classList.remove('active');
        } else {
            deliveryBtn.classList.add('active');
            pickupBtn.classList.remove('active');
        }
    }
}

// Toggle delivery option for a single item
function toggleDeliveryForItem(productId, option) {
    updateDeliveryOption(productId, option);
    renderCartPage();
}

// ============================================
// 🚀 CHECKOUT
// ============================================

// Proceed to checkout
function proceedToCheckout() {
    const items = getCartItemsWithDetails();
    if (items.length === 0) {
        alert('Your cart is empty! Add some products first.');
        return;
    }
    
    // Save current cart state
    saveCart();
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// ============================================
// 🧹 HELPERS
// ============================================

// Get cart summary for checkout page
function getCartSummary() {
    return {
        items: getCartItemsWithDetails(),
        subtotal: getCartTotal(),
        deliveryFee: getDeliveryFee(),
        total: getCartTotalWithDelivery(),
        itemCount: getCartTotalItems(),
        hasDelivery: hasDeliveryItems()
    };
}

// ============================================
// 📝 INITIALIZE
// ============================================

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    updateCartCount();
    
    // If we're on the cart page, render it
    if (document.getElementById('cartItemsContainer')) {
        renderCartPage();
        
        // Setup delivery toggle buttons
        const pickupBtn = document.getElementById('pickupToggle');
        const deliveryBtn = document.getElementById('deliveryToggle');
        
        if (pickupBtn) {
            pickupBtn.addEventListener('click', function() {
                toggleDeliveryForAll('pickup');
            });
        }
        
        if (deliveryBtn) {
            deliveryBtn.addEventListener('click', function() {
                toggleDeliveryForAll('delivery');
            });
        }
        
        // Setup checkout button
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', proceedToCheckout);
        }
    }
    
    console.log('🛒 Cart loaded! Items:', getCartTotalItems());
});

// ============================================
// 🧪 TEST FUNCTIONS (for console testing)
// ============================================

// Test: Add a product to cart (for testing in console)
function testAddToCart() {
    const productId = 1; // Tecno Camon 20
    addToCart(productId, 2);
    console.log('✅ Added product to cart!');
    console.log('Cart:', cart);
    updateCartCount();
}

// Test: View cart in console
function testViewCart() {
    console.log('📦 Cart Items:', getCartItemsWithDetails());
    console.log('💰 Subtotal:', formatPrice(getCartTotal()));
    console.log('🚚 Delivery Fee:', formatPrice(getDeliveryFee()));
    console.log('💳 Total:', formatPrice(getCartTotalWithDelivery()));
}

// Make functions available globally
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.changeQuantity = changeQuantity;
window.removeItem = removeItem;
window.renderCartPage = renderCartPage;
window.toggleDeliveryForAll = toggleDeliveryForAll;
window.proceedToCheckout = proceedToCheckout;
window.clearCart = clearCart;
window.testAddToCart = testAddToCart;
window.testViewCart = testViewCart;

console.log('🛒 Cart.js loaded successfully!');
console.log('💡 Try typing: testAddToCart() in the console to test!');