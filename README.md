

# E-Commerce Website Client

## Screenshot

![E-Commerce Website Screenshot](https://drive.google.com/uc?export=view&id=1YgrVpuY8JRyXc1UNii2HPAN4vGeVdV5q)

---


This repository contains the client-side code for an e-commerce website built using modern web technologies. The client is hosted on Vercel at [https://client-8r57.vercel.app/](https://client-8r57.vercel.app/) and integrates with the backend API for product management, user authentication, order processing, and more.

GitHub Repository: [https://github.com/md-Gafrujama/client](https://github.com/md-Gafrujama/client)

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup and Installation](#setup-and-installation)
4. [Project Structure](#project-structure)
5. [Environment Variables](#environment-variables)
6. [API Integration](#api-integration)
7. [Deployment](#deployment)
8. [Contributing](#contributing)
9. [License](#license)

---

## Features

- **User Authentication**: Login, registration, and profile management.
- **Product Listings**: Display products with images, prices, and descriptions.
- **Search and Filter**: Search for products and filter by category, price, etc.
- **Shopping Cart**: Add/remove products and manage the cart.
- **Checkout and Payment**: Secure checkout process with payment gateway integration.
- **Order History**: View past orders and order details.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **Admin Panel**: Manage products, orders, and users (admin-only).

---

## Technologies Used

- **Frontend Framework**: React.js
- **State Management**: Redux or Context API
- **Styling**: Tailwind CSS or CSS Modules
- **Routing**: React Router
- **API Integration**: Axios or Fetch API
- **Form Handling**: Formik or React Hook Form
- **Payment Gateway**: Stripe or PayPal
- **Hosting**: Vercel

---

## Setup and Installation

### Prerequisites

- Node.js installed on your machine ([Download Node.js](https://nodejs.org/))
- NPM or Yarn package manager

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/md-Gafrujama/client.git
   cd client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   REACT_APP_API_URL=https://server-rust-mu.vercel.app
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

4. **Run the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```
   The application will start at `http://localhost:3000`.

---

## Project Structure

The project is organized as follows:

```
client/
├── public/                  # Static assets (images, icons, etc.)
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   ├── pages/               # Application pages (Home, Product, Cart, etc.)
│   ├── services/            # API service calls
│   ├── store/               # Redux store (if using Redux)
│   ├── styles/              # Global styles or CSS modules
│   ├── utils/               # Utility functions
│   ├── App.js               # Main application component
│   ├── index.js             # Entry point
├── .env                     # Environment variables
├── package.json             # Project dependencies
├── README.md                # Project documentation
```

---

## Environment Variables

| Variable Name               | Description                          | Example Value                     |
|-----------------------------|--------------------------------------|-----------------------------------|
| `REACT_APP_API_URL`         | Backend API base URL                 | `https://server-rust-mu.vercel.app` |
| `REACT_APP_STRIPE_PUBLIC_KEY` | Stripe public key for payment       | `pk_test_XXXXXXXXXXXXXXXXXXXX`    |

---

## API Integration

The client interacts with the backend API hosted at `https://server-rust-mu.vercel.app`. Below are the key API endpoints used:

### Authentication
- `POST /api/register` - Register a new user.
- `POST /api/login` - Log in and get a JWT token.
- `GET /api/profile` - Get user profile (requires authentication).

### Products
- `GET /api/products` - Get all products.
- `GET /api/products/{id}` - Get a single product by ID.

### Cart
- `POST /api/cart` - Add a product to the cart.
- `DELETE /api/cart/{id}` - Remove a product from the cart.
- `GET /api/cart` - Get the user's cart.

### Orders
- `POST /api/orders` - Create a new order.
- `GET /api/orders` - Get all orders (admin-only).
- `GET /api/orders/{id}` - Get a single order by ID.

### Payment
- `POST /api/payment` - Process payment using Stripe.

---

## Deployment

The client is deployed on Vercel. Follow these steps to deploy:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Set environment variables on Vercel:
   - Go to your Vercel dashboard.
   - Navigate to the project settings.
   - Add the required environment variables.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository:
   ```bash
   git clone https://github.com/md-Gafrujama/client.git
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```

4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For any issues or questions, please open an issue on the [GitHub repository](https://github.com/md-Gafrujama/client) or contact the maintainer.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

