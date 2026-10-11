const products = [
    { id: 1, name: "Premium Oil Filter", brand: "Bosch", category: "engine", price: 12.99, description: "High-quality oil filter for optimal engine protection.", image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=300&q=80" },
    { id: 2, name: "Ceramic Brake Pads", brand: "Akebono", category: "brakes", price: 89.99, description: "Ceramic brake pads for superior stopping power and low dust.", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=300&q=80" },
    { id: 3, name: "LED Headlight Bulbs", brand: "Philips", category: "lighting", price: 45.99, description: "Ultra-bright LED headlights for crystal clear night driving.", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=300&q=80" },
    { id: 4, name: "All-Weather Floor Mats", brand: "WeatherTech", category: "accessories", price: 129.99, description: "Heavy-duty floor mats to protect your vehicle interior.", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80" }
];

let cart = [];
let orders = [];

function displayProducts(items) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price.toFixed(2)}</div>
            <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    alert(product.name + " added to cart!");
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.className = 'summary-row';
            div.innerHTML = `<span>${item.name} (x${item.quantity})</span><span>$${(item.price * item.quantity).toFixed(2)}</span>`;
            cartItemsContainer.appendChild(div);
        });
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    document.getElementById('cart-subtotal').innerText = '$' + subtotal.toFixed(2);
    document.getElementById('cart-tax').innerText = '$' + tax.toFixed(2);
    document.getElementById('cart-total').innerText = '$' + total.toFixed(2);
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    displayProducts(filtered);
}

function filterProducts() {
    const category = document.getElementById('category-filter').value;
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function filterCategory(cat) {
    document.getElementById('category-filter').value = cat;
    filterProducts();
    window.location.hash = '#engine';
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    document.getElementById('checkout').style.display = 'block';
    window.location.hash = '#checkout';
}

function completeOrder(event) {
    event.preventDefault();
    const address = document.getElementById('shipping-address').value;
    const order = {
        id: Date.now(),
        items: [...cart],
        address: address,
        total: document.getElementById('cart-total').innerText
    };
    orders.push(order);
    cart = [];
    updateCartUI();
    document.getElementById('checkout').style.display = 'none';
    alert('Order placed successfully!');
    updateOrderHistory();
}

function updateOrderHistory() {
    const historyContainer = document.getElementById('order-history');
    if (orders.length === 0) {
        historyContainer.innerHTML = 'No past orders found.';
    } else {
        historyContainer.innerHTML = orders.map(o => `<p>Order #${o.id} - Total: ${o.total} - Address: ${o.address}</p>`).join('');
    }
}

function submitContact(event) {
    event.preventDefault();
    alert('Thank you for contacting AutoZone! We will get back to you soon.');
    event.target.reset();
}

// Initial load
displayProducts(products);
