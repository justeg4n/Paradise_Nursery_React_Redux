# Paradise Nursery — React & Redux Shopping Cart

An online plant shop built with **React** and **Redux Toolkit**: a landing page, a product catalog grouped by category, and a shopping cart with live totals.

## Features

- Landing page with an "About us" section and a **Get Started** button
- Product listing by category (air-purifying, aromatic, insect-repellent plants) with image, description and price
- **Add to Cart** buttons that disable once a plant is in the cart
- Navbar cart icon showing the total number of items
- Cart page: increase / decrease quantity, delete items, per-item subtotal and total cart amount, continue shopping
- Global cart state managed with a Redux Toolkit slice (`addItem`, `removeItem`, `updateQuantity`)

## Run

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/
```

## Project structure

```
├── public/
└── src/
    ├── index.js            # entry point, Redux Provider
    ├── App.jsx             # landing page
    ├── ProductList.jsx     # navbar + product catalog
    ├── CartItem.jsx        # cart page
    ├── store.js            # Redux store
    ├── redux/CartSlice.js  # cart reducer and actions
    └── *.css
```

## Tech stack

React 19 · Redux Toolkit · React Redux · Create React App

---
Author: Nguyen Quoc Anh — FPT University
