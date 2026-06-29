// ============================================
// AVIX - PRODUCT DATA (50 Items)
// ALL 50 Products with Real Images
// ============================================

const products = [
    // =========================================
    // 🔵 TECNO PHONES (New)
    // =========================================
    {
        id: 1,
        name: 'Tecno Camon 20',
        brand: 'Tecno',
        category: 'phone',
        condition: 'new',
        price: 320000,
        originalPrice: 350000,
        image: 'assets/images/tecno-camon-20.jpg',
        description: '6.67" AMOLED screen, 64MP camera, 5000mAh battery. Super slim design.',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Tecno Spark 10 Pro',
        brand: 'Tecno',
        category: 'phone',
        condition: 'new',
        price: 180000,
        originalPrice: 195000,
        image: 'assets/images/tecno-spark-10-pro.jpg',
        description: '6.8" display, 50MP camera, 5000mAh battery. Great for daily use.',
        rating: 4.3
    },
    {
        id: 3,
        name: 'Tecno Pova 5',
        brand: 'Tecno',
        category: 'phone',
        condition: 'new',
        price: 220000,
        originalPrice: 240000,
        image: 'assets/images/tecno-pova-5.jpg',
        description: 'Gaming phone with 6000mAh battery and 120Hz smooth display.',
        rating: 4.6
    },
    {
        id: 4,
        name: 'Tecno Camon 19 Pro',
        brand: 'Tecno',
        category: 'phone',
        condition: 'new',
        price: 280000,
        originalPrice: 300000,
        image: 'assets/images/tecno-camon-19-pro.jpg',
        description: 'Pro camera system with 108MP sensor. Premium build quality.',
        rating: 4.7
    },
    {
        id: 5,
        name: 'Tecno Spark 9',
        brand: 'Tecno',
        category: 'phone',
        condition: 'new',
        price: 130000,
        originalPrice: 145000,
        image: 'assets/images/tecno-spark-9.jpg',
        description: 'Affordable with 6.6" display and 32MP selfie camera.',
        rating: 4.0
    },

    // =========================================
    // 🔵 TECNO PHONES (Refurbished)
    // =========================================
    {
        id: 6,
        name: 'Tecno Camon 19 (Refurbished)',
        brand: 'Tecno',
        category: 'phone',
        condition: 'refurbished',
        grade: 'A',
        price: 150000,
        originalPrice: 220000,
        image: 'assets/images/tecno-camon-19-refurb.jpg',
        description: 'Grade A - Like new! 48MP camera, 5000mAh battery. Fully tested.',
        rating: 4.2
    },
    {
        id: 7,
        name: 'Tecno Spark 9 Pro (Refurbished)',
        brand: 'Tecno',
        category: 'phone',
        condition: 'refurbished',
        grade: 'B',
        price: 95000,
        originalPrice: 150000,
        image: 'assets/images/tecno-spark-9-pro-refurb.jpg',
        description: 'Grade B - Minor scratches. Works perfectly. Great value!',
        rating: 3.9
    },

    // =========================================
    // 🟢 ITEL PHONES (New)
    // =========================================
    {
        id: 8,
        name: 'Itel A60',
        brand: 'Itel',
        category: 'phone',
        condition: 'new',
        price: 85000,
        originalPrice: 95000,
        image: 'assets/images/itel-a60.jpg',
        description: '6.6" display, 4000mAh battery. Simple and affordable.',
        rating: 4.0
    },
    {
        id: 9,
        name: 'Itel S23',
        brand: 'Itel',
        category: 'phone',
        condition: 'new',
        price: 120000,
        originalPrice: 135000,
        image: 'assets/images/itel-s23.jpg',
        description: '50MP camera, 8GB RAM. Stylish design. Great performance.',
        rating: 4.4
    },
    {
        id: 10,
        name: 'Itel P40',
        brand: 'Itel',
        category: 'phone',
        condition: 'new',
        price: 105000,
        originalPrice: 115000,
        image: 'assets/images/itel-p40.jpg',
        description: '6000mAh battery! Perfect for people who need long battery life.',
        rating: 4.3
    },
    {
        id: 11,
        name: 'Itel Vision 3',
        brand: 'Itel',
        category: 'phone',
        condition: 'new',
        price: 75000,
        originalPrice: 85000,
        image: 'assets/images/itel-vision-3.jpg',
        description: '6.5" display, 8MP camera. Best budget option.',
        rating: 3.8
    },

    // =========================================
    // 🟢 ITEL PHONES (Refurbished)
    // =========================================
    {
        id: 12,
        name: 'Itel A58 (Refurbished)',
        brand: 'Itel',
        category: 'phone',
        condition: 'refurbished',
        grade: 'A',
        price: 55000,
        originalPrice: 85000,
        image: 'assets/images/itel-a58-refurb.jpg',
        description: 'Grade A - Excellent condition. Super affordable smartphone.',
        rating: 4.1
    },

    // =========================================
    // 🔴 REDMI PHONES (New)
    // =========================================
    {
        id: 13,
        name: 'Redmi Note 12',
        brand: 'Redmi',
        category: 'phone',
        condition: 'new',
        price: 280000,
        originalPrice: 310000,
        image: 'assets/images/redmi-note-12.jpg',
        description: '6.67" AMOLED, 108MP camera, 5000mAh. Premium mid-range phone.',
        rating: 4.7
    },
    {
        id: 14,
        name: 'Redmi 13C',
        brand: 'Redmi',
        category: 'phone',
        condition: 'new',
        price: 160000,
        originalPrice: 175000,
        image: 'assets/images/redmi-13c.jpg',
        description: '6.74" display, 50MP camera, 5000mAh. Great value!',
        rating: 4.4
    },
    {
        id: 15,
        name: 'Redmi 12C',
        brand: 'Redmi',
        category: 'phone',
        condition: 'new',
        price: 135000,
        originalPrice: 148000,
        image: 'assets/images/redmi-12c.jpg',
        description: '6.71" display, 50MP camera. Budget-friendly and reliable.',
        rating: 4.2
    },

    // =========================================
    // 🔴 REDMI PHONES (Refurbished)
    // =========================================
    {
        id: 16,
        name: 'Redmi Note 11 (Refurbished)',
        brand: 'Redmi',
        category: 'phone',
        condition: 'refurbished',
        grade: 'A',
        price: 180000,
        originalPrice: 260000,
        image: 'assets/images/redmi-note-11-refurb-a.jpg',
        description: 'Grade A - Like new. 6.43" AMOLED, 50MP camera. Premium feel.',
        rating: 4.5
    },
    {
        id: 17,
        name: 'Redmi Note 11 (Refurbished)',
        brand: 'Redmi',
        category: 'phone',
        condition: 'refurbished',
        grade: 'B',
        price: 150000,
        originalPrice: 260000,
        image: 'assets/images/redmi-note-11-refurb-b.jpg',
        description: 'Grade B - Minor wear. Still performs like new!',
        rating: 4.3
    },

    // =========================================
    // 🟡 SAMSUNG PHONES (New)
    // =========================================
    {
        id: 18,
        name: 'Samsung Galaxy A54',
        brand: 'Samsung',
        category: 'phone',
        condition: 'new',
        price: 420000,
        originalPrice: 460000,
        image: 'assets/images/samsung-a54.jpg',
        description: '6.4" AMOLED 120Hz, 50MP OIS camera, 5000mAh. Premium mid-range.',
        rating: 4.8
    },
    {
        id: 19,
        name: 'Samsung Galaxy S23 FE',
        brand: 'Samsung',
        category: 'phone',
        condition: 'new',
        price: 550000,
        originalPrice: 600000,
        image: 'assets/images/samsung-s23-fe.jpg',
        description: 'Flagship experience! 50MP camera, 8K video, premium design.',
        rating: 4.9
    },
    {
        id: 20,
        name: 'Samsung Galaxy A15',
        brand: 'Samsung',
        category: 'phone',
        condition: 'new',
        price: 220000,
        originalPrice: 240000,
        image: 'assets/images/samsung-a15.jpg',
        description: '6.5" display, 50MP camera, 5000mAh. Best budget Samsung.',
        rating: 4.4
    },

    // =========================================
    // 🟡 SAMSUNG PHONES (Refurbished)
    // =========================================
    {
        id: 21,
        name: 'Samsung Galaxy S21 (Refurbished)',
        brand: 'Samsung',
        category: 'phone',
        condition: 'refurbished',
        grade: 'A',
        price: 380000,
        originalPrice: 550000,
        image: 'assets/images/samsung-s21-refurb-a.jpg',
        description: 'Grade A - Like new. Flagship 2021 model. 64MP camera.',
        rating: 4.6
    },
    {
        id: 22,
        name: 'Samsung Galaxy S21 (Refurbished)',
        brand: 'Samsung',
        category: 'phone',
        condition: 'refurbished',
        grade: 'B',
        price: 320000,
        originalPrice: 550000,
        image: 'assets/images/samsung-s21-refurb-b.jpg',
        description: 'Grade B - Minor scratches. Still flagship performance!',
        rating: 4.4
    },
    {
        id: 23,
        name: 'Samsung Galaxy A52 (Refurbished)',
        brand: 'Samsung',
        category: 'phone',
        condition: 'refurbished',
        grade: 'A',
        price: 250000,
        originalPrice: 350000,
        image: 'assets/images/samsung-a52-refurb-a.jpg',
        description: 'Grade A - Excellent. 6.5" 90Hz AMOLED, 64MP OIS camera.',
        rating: 4.5
    },
    {
        id: 24,
        name: 'Samsung Galaxy A52 (Refurbished)',
        brand: 'Samsung',
        category: 'phone',
        condition: 'refurbished',
        grade: 'C',
        price: 180000,
        originalPrice: 350000,
        image: 'assets/images/samsung-a52-refurb-c.jpg',
        description: 'Grade C - Visible wear. Fully functional. Best budget option!',
        rating: 3.8
    },

    // =========================================
    // 📱 ACCESSORIES (Chargers, Cables, etc.)
    // =========================================
    {
        id: 25,
        name: 'Fast Charger 25W USB-C',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 15000,
        originalPrice: 18000,
        image: 'assets/images/charger-25w.jpg',
        description: 'Fast charge your phone in 30 minutes. Compatible with all brands.',
        rating: 4.6
    },
    {
        id: 26,
        name: 'Fast Charger 45W Dual Port',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 25000,
        originalPrice: 30000,
        image: 'assets/images/charger-45w.jpg',
        description: 'Charge 2 devices at once. Super fast!',
        rating: 4.7
    },
    {
        id: 27,
        name: 'Premium USB-C Cable (2m)',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 8000,
        originalPrice: 10000,
        image: 'assets/images/usb-c-cable-2m.jpg',
        description: 'Braided nylon cable. Durable and tangle-free.',
        rating: 4.5
    },
    {
        id: 28,
        name: 'Premium USB-C Cable (1m)',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 6000,
        originalPrice: 7500,
        image: 'assets/images/usb-c-cable-1m.jpg',
        description: 'Short and sturdy. Perfect for power banks.',
        rating: 4.3
    },

    // =========================================
    // 🛡️ SCREEN GUARDS
    // =========================================
    {
        id: 29,
        name: 'Tempered Glass Screen Guard',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 5000,
        originalPrice: 7000,
        image: 'assets/images/screen-guard-tempered.jpg',
        description: '9H hardness. Protects your screen from scratches and drops.',
        rating: 4.4
    },
    {
        id: 30,
        name: 'Privacy Screen Guard',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 8000,
        originalPrice: 10000,
        image: 'assets/images/screen-guard-privacy.jpg',
        description: "People beside you can't see your screen. Keeps your privacy!",
        rating: 4.6
    },
    {
        id: 31,
        name: 'Blue Light Filter Screen Guard',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 6500,
        originalPrice: 8500,
        image: 'assets/images/screen-guard-blue-light.jpg',
        description: 'Protects your eyes from harmful blue light. Reduces eye strain.',
        rating: 4.5
    },

    // =========================================
    // 🎒 PHONE POUCHES & CASES
    // =========================================
    {
        id: 32,
        name: 'Leather Phone Pouch',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 12000,
        originalPrice: 15000,
        image: 'assets/images/leather-pouch.jpg',
        description: 'Premium leather. Fits all phones up to 6.8". Classy and safe.',
        rating: 4.7
    },
    {
        id: 33,
        name: 'Silicone Phone Case',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 7000,
        originalPrice: 9000,
        image: 'assets/images/silicone-case.jpg',
        description: 'Shockproof silicone. Multiple colors. Protects your phone.',
        rating: 4.3
    },
    {
        id: 34,
        name: 'Clear Transparent Case',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 5000,
        originalPrice: 6500,
        image: 'assets/images/clear-case.jpg',
        description: 'Show off your phone design. Ultra-thin and protective.',
        rating: 4.2
    },
    {
        id: 35,
        name: 'Wallet Phone Case',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 15000,
        originalPrice: 18000,
        image: 'assets/images/wallet-case.jpg',
        description: 'Holds your cards and cash. 2-in-1 case and wallet.',
        rating: 4.5
    },

    // =========================================
    // ⚡ POWER BANKS
    // =========================================
    {
        id: 36,
        name: 'Power Bank 10000mAh',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 25000,
        originalPrice: 30000,
        image: 'assets/images/power-bank-10000.jpg',
        description: 'Charge your phone 3 times. Fast charging. Compact design.',
        rating: 4.7
    },
    {
        id: 37,
        name: 'Power Bank 20000mAh',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 40000,
        originalPrice: 48000,
        image: 'assets/images/power-bank-20000.jpg',
        description: 'Charge 6 times! Perfect for travel. Dual USB ports.',
        rating: 4.8
    },

    // =========================================
    // 🎧 EARPHONES & BUDS
    // =========================================
    {
        id: 38,
        name: 'Wireless Earbuds',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 35000,
        originalPrice: 42000,
        image: 'assets/images/wireless-earbuds.jpg',
        description: 'Bluetooth 5.0. Noise cancellation. 24hr battery life.',
        rating: 4.6
    },
    {
        id: 39,
        name: 'Wired Earphones',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 8000,
        originalPrice: 10000,
        image: 'assets/images/wired-earphones.jpg',
        description: '3.5mm jack. Great sound quality. Durable cable.',
        rating: 4.3
    },

    // =========================================
    // 🔧 LAPTOP ACCESSORIES
    // =========================================
    {
        id: 40,
        name: 'Laptop Battery - HP',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 45000,
        originalPrice: 55000,
        image: 'assets/images/laptop-battery-hp.jpg',
        description: 'Original HP battery. For HP Pavilion, Envy models. Full capacity.',
        rating: 4.5
    },
    {
        id: 41,
        name: 'Laptop Battery - Dell',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 47000,
        originalPrice: 57000,
        image: 'assets/images/laptop-battery-dell.jpg',
        description: 'Original Dell battery. For Inspiron, XPS models. Long-lasting.',
        rating: 4.6
    },
    {
        id: 42,
        name: 'Laptop Charger 65W',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 30000,
        originalPrice: 36000,
        image: 'assets/images/laptop-charger-65w.jpg',
        description: 'Universal charger with multiple tips. Fits most laptops.',
        rating: 4.4
    },

    // =========================================
    // 📟 OTHER DEVICES
    // =========================================
    {
        id: 43,
        name: 'Pedometer / Fitness Tracker',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 22000,
        originalPrice: 28000,
        image: 'assets/images/pedometer.jpg',
        description: 'Tracks steps, calories, sleep. Syncs with your phone.',
        rating: 4.3
    },
    {
        id: 44,
        name: 'Phone Stand Holder',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 8000,
        originalPrice: 10000,
        image: 'assets/images/phone-stand.jpg',
        description: 'Adjustable angle. Perfect for watching videos or video calls.',
        rating: 4.2
    },
    {
        id: 45,
        name: 'Phone Grip Ring',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 4000,
        originalPrice: 5000,
        image: 'assets/images/grip-ring.jpg',
        description: 'Prevents drops. Also works as a stand. Fits any phone.',
        rating: 4.1
    },

    // =========================================
    // 🔌 MORE ACCESSORIES
    // =========================================
    {
        id: 46,
        name: 'USB-C to 3.5mm Adapter',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 5000,
        originalPrice: 6500,
        image: 'assets/images/usb-c-adapter.jpg',
        description: 'Connect your wired earphones to USB-C phones. Small and handy.',
        rating: 4.0
    },
    {
        id: 47,
        name: 'Micro USB Cable (1m)',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 5000,
        originalPrice: 6500,
        image: 'assets/images/micro-usb-cable.jpg',
        description: 'For older Android phones. Durable and fast charging.',
        rating: 4.2
    },
    {
        id: 48,
        name: 'Car Phone Holder',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 12000,
        originalPrice: 15000,
        image: 'assets/images/car-holder.jpg',
        description: 'Dashboard mount. 360° rotation. For all phone sizes.',
        rating: 4.5
    },
    {
        id: 49,
        name: 'Wireless Charging Pad',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 28000,
        originalPrice: 34000,
        image: 'assets/images/wireless-charger.jpg',
        description: 'Just place your phone and it charges. No cables needed!',
        rating: 4.6
    },
    {
        id: 50,
        name: 'Screen Cleaner Kit',
        brand: 'Avix',
        category: 'accessory',
        condition: 'new',
        price: 3000,
        originalPrice: 4000,
        image: 'assets/images/screen-cleaner.jpg',
        description: 'Microfiber cloth + cleaning solution. Keep your screen spotless.',
        rating: 4.4
    }
];

// ============================================
// 📊 HELPER FUNCTIONS
// ============================================

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function getProductsByBrand(brand) {
    return products.filter(p => p.brand === brand);
}

function getProductsByCategory(category) {
    return products.filter(p => p.category === category);
}

function getProductsByCondition(condition) {
    return products.filter(p => p.condition === condition);
}

function getFeaturedProducts() {
    return products.slice(0, 8);
}

function getUniqueBrands() {
    const brands = products.map(p => p.brand);
    return [...new Set(brands)];
}

function getUniqueCategories() {
    const categories = products.map(p => p.category);
    return [...new Set(categories)];
}

function formatPrice(price) {
    return '₦' + price.toLocaleString();
}

function getConditionBadge(product) {
    if (product.condition === 'new') {
        return 'NEW';
    } else {
        return 'REFURBISHED';
    }
}

function getGradeClass(product) {
    if (product.condition === 'new') return 'badge-new';
    if (product.grade === 'A') return 'badge-grade-a';
    if (product.grade === 'B') return 'badge-grade-b';
    if (product.grade === 'C') return 'badge-grade-c';
    return 'badge-refurbished';
}

function getStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '⭐';
        } else if (halfStar && i === fullStars) {
            stars += '⭐';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

console.log('✅ AVIX Products Loaded!');
console.log('📱 Total Products:', products.length);
console.log('🏷️  Brands:', getUniqueBrands());