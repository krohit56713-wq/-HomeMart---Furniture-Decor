# HomeMart – Furniture & Decor (Flipkart-style frontend)

A responsive, front-end furniture e-commerce project based on the supplied Data Alcott WD-EC-004 brief. It uses HTML5, CSS3 and vanilla JavaScript. No database or backend is required.

## Run locally
1. Extract `homemart-flipkart-style.zip`.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code **Live Server** extension and click **Go Live**.
4. Keep `index.html`, `style.css`, and `script.js` in the same folder.

## Included functionality
- Responsive desktop/mobile layout with Flipkart-inspired shopping flow (original HomeMart branding/design).
- Product catalogue, category navigation, search, sorting, category/material/rating/price filters.
- Product details modal, wishlist, cart, quantity changes, remove item and totals.
- Checkout form with address validation and simulated COD/UPI/card selection.
- Simulated login/register, order history and localStorage persistence.
- Newsletter interaction and toast notifications.

## Important project notes
- This is a frontend demonstration, not a production marketplace.
- Login is simulated in the browser; there is no secure authentication server.
- UPI/card payments are simulated; no real payment is processed.
- Product data is stored in the JavaScript array in `script.js`.
- Product photography loads from Unsplash, so an internet connection is needed for those images. The site itself runs locally.
- Before submission, replace demo contact details and add your own screenshots, GitHub repository link and demo video.

## Customizing products
Edit the `products` array near the top of `script.js`. Each product has: `id`, `name`, `category`, `price`, `old`, `material`, `rating`, `reviews`, `image`, `badge`, `desc`, `dimensions`, and `brand`.
