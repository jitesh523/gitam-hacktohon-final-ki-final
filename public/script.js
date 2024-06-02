const products = [
    // Pain Relief
    { id: 1, name: 'Paracetamol', price: 5.00, image: 'https://www.stelonbiotech.com/wp-content/uploads/2022/04/PYREMUST-650-TAB.jpg', category: 'Pain Relief' },
    { id: 2, name: 'Ibuprofen', price: 8.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/325863554/WI/JM/SY/135658020/ibuprofen-tablets-ip-200-mg-.jpg', category: 'Pain Relief' },
    { id: 3, name: 'Aspirin', price: 7.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330506870/UM/GZ/QO/135658020/aspirin-dispersible-tablets.jpg', category: 'Pain Relief' },

    // Cold and Flu
    { id: 4, name: 'Pseudoephedrine', price: 6.00, image: 'https://www.sudafed.com/sites/sudafed_us/files/styles/product_image/public/sinuscongestion_productshot2x.jpg', category: 'Cold and Flu' },
    { id: 5, name: 'Guaifenesin', price: 10.00, image: 'https://images-cdn.ubuy.co.in/64a6695d3767876a261003c7-mucus-er-guaifenesin-600-mg.jpg', category: 'Cold and Flu' },
    { id: 6, name: 'Dextromethorphan', price: 9.00, image: 'https://astraeureka.com/wp-content/uploads/2023/05/dexmin-768x1024.jpg', category: 'Cold and Flu' },

    // Allergies
    { id: 7, name: 'Loratadine', price: 12.00, image: 'https://www.bigbasket.com/media/uploads/p/xxl/40233674_1-alaspan-loratadine-tablet-provides-relief-from-sneezing-itchy-throat-watery-eyes.jpg', category: 'Allergies' },
    { id: 8, name: 'Cetirizine', price: 11.00, image: 'https://5.imimg.com/data5/SELLER/Default/2022/7/PN/RG/HF/2593018/cetirizine-tablets-ip-10mg.jpg', category: 'Allergies' },
    { id: 9, name: 'Diphenhydramine', price: 10.00, image: 'https://www.benadryl.com.ph/sites/benadryl_ph/files/product-images/ah_side_0.png', category: 'Allergies' },

    // Digestive Health
    { id: 10, name: 'Omeprazole', price: 14.00, image: 'https://res.cloudinary.com/zava-www-uk/image/upload/fl_progressive/a_exif,f_auto,e_sharpen:100,c_fit,w_1080,h_810,q_70,fl_lossy/v1706806290/sd/uk/services-setup/acid-reflux/omeprazole/knh8cjncnq9z5axkil3h.png', category: 'Digestive Health' },
    { id: 11, name: 'Loperamide', price: 8.00, image: 'https://images-cdn.ubuy.co.in/633ab15d581d1743ac283dca-amazon-basic-care-loperamide.jpg', category: 'Digestive Health' },
    { id: 12, name: 'Simethicone', price: 7.00, image: 'https://images-cdn.ubuy.co.in/635aa13b605396718f1af244-simethicone-180-mg-540-softgels-anti-gas.jpg', category: 'Digestive Health' },

    // Skin Care
    { id: 13, name: 'Hydrocortisone Cream', price: 5.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/PG/VE/BA/62419849/hydrocortisone1.jpg', category: 'Skin Care' },
    { id: 14, name: 'Neosporin', price: 6.00, image: 'https://images-cdn.ubuy.co.in/633aa06331538537443d82de-neosporin-antibiotic-original-ointment.jpg', category: 'Skin Care' },
    { id: 15, name: 'Aloe Vera Gel', price: 4.00, image: 'https://cdn.foreverliving.com/content/products/images/forever_aloe_vera_gel__pd_main_512_X_512_1673615611376.jpg', category: 'Skin Care' },

    // Heart Health
    { id: 16, name: 'Aspirin (Low Dose)', price: 3.00, image: 'https://images-na.ssl-images-amazon.com/images/I/71p+AAqcIDL._AC_UL600_SR600,600_.jpg', category: 'Heart Health' },
    { id: 17, name: 'Atorvastatin', price: 25.00, image: 'https://ecommerce.genericartmedicine.com/upload/products/product-photo-3111212023172123.png', category: 'Heart Health' },
    { id: 18, name: 'Metoprolol', price: 20.00, image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/417037453/BH/KE/UG/13166357/metoprolol-tartrate-ip-50-mg.jpg', category: 'Heart Health' },

    // Mental Health
    { id: 19, name: 'Sertraline', price: 30.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/301146018/EH/NX/UM/1090199/sertraline-50-mg-tablets-sertafine.jpg', category: 'Mental Health' },
    { id: 20, name: 'Alprazolam', price: 35.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/336828762/MF/II/HS/187995913/alprazolam-tablets-ip-0-5-mg.jpeg', category: 'Mental Health' },
    { id: 21, name: 'Escitalopram', price: 32.00, image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/308494758/SJ/XY/LU/11363416/escitalopram-oxalate-10mg-tablets-all-india.jpeg', category: 'Mental Health' },
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    const groupedProducts = products.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    for (const category in groupedProducts) {
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.innerText = category;
        productsContainer.appendChild(categoryTitle);

        const categoryProducts = groupedProducts[category];
        categoryProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productsContainer.appendChild(productDiv);
        });
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cart-count').textContent = cart.length;
}

function openCart() {
    const cartModal = document.getElementById('cart-modal');
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const subtotalDiv = document.createElement('div');
    subtotalDiv.className = 'cart-subtotal';
    subtotalDiv.innerHTML = `<p>Subtotal: $${subtotal.toFixed(2)}</p>`;
    cartItemsContainer.appendChild(subtotalDiv);

    cartModal.style.display = 'block';
}

function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}

function proceedToCheckout() {
    closeCart();
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'block';
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkout-modal');
    checkoutModal.style.display = 'none';
}

function submitCheckout(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const checkoutData = Object.fromEntries(formData.entries());
    console.log('Checkout Data:', checkoutData);

    alert('Checkout process completed');
    closeCheckout();
}

function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

function displayAllProducts() {
    displayProducts(products);
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const checkoutModal = document.getElementById('checkout-modal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
}
