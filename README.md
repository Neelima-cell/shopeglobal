# ShoppyGlobe E-commerce Application

A modern, responsive e-commerce application built with React, JavaScript, Vite, Redux Toolkit, and React Router. This project demonstrates advanced React concepts including state management, routing, custom hooks, performance optimization, and responsive design.

## 🚀 Features

### Component Architecture (20 marks)
- **App**: Main application component with routing and Redux provider
- **Header**: Navigation menu with shopping cart icon and badge
- **ProductList**: Displays product grid with search functionality
- **ProductItem**: Individual product cards with "Add to Cart" functionality
- **ProductDetail**: Detailed product view with image gallery
- **Cart**: Shopping cart with quantity controls and order summary
- **CartItem**: Individual cart item with quantity and remove options
- **NotFound**: 404 error page for invalid routes
- **Checkout**: Order form with shipping and payment information

### State Management (70 marks)
- **Redux Toolkit**: Complete cart management with actions and reducers
- **Search Feature**: Real-time product filtering across multiple fields
- **Cart Operations**: Add, remove, update quantity, and clear cart functionality
- **Persistent State**: Cart state maintained across navigation

### Data Fetching (40 marks)
- **Custom Hook**: `useProducts` for fetching product list from API
- **Product Details**: `useProduct` hook for individual product data
- **API Integration**: Connects to DummyJSON API (https://dummyjson.com/products)
- **Error Handling**: Comprehensive error management with user-friendly messages
- **Loading States**: Proper loading indicators during data fetching

### Routing (20 marks)
- **React Router**: Complete navigation system
- **Routes**: Home, Product Detail, Cart, Checkout, and 404 pages
- **Dynamic Routing**: Product details with route parameters
- **Navigation**: Breadcrumbs and back navigation

### Performance Optimization (20 marks)
- **Code Splitting**: React.lazy for component-based splitting
- **Suspense**: Loading fallbacks for lazy-loaded components
- **Memoization**: useMemo for expensive computations
- **Optimized Rendering**: Efficient list rendering with proper keys

### Responsive Design (20 marks)
- **Mobile-First**: Responsive design for all screen sizes
- **Modern CSS**: Grid, Flexbox, and CSS animations
- **Accessibility**: Focus states, ARIA labels, and keyboard navigation
- **Cross-Browser**: Compatible with modern browsers

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Modern build tool and development server
- **JavaScript (ES6+)** - Modern JavaScript with JSDoc for documentation
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **CSS3** - Modern styling with Grid and Flexbox
- **DummyJSON API** - Product data source

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shoppyglobe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (opens automatically)

## 🏗️ Project Structure

```
shoppyglobe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Checkout.jsx
│   │   ├── NotFound.jsx
│   │   └── *.css
│   ├── hooks/
│   │   └── useProducts.js
│   ├── store/
│   │   ├── index.js
│   │   └── cartSlice.js
│   ├── types/
│   │   └── index.js (JSDoc type definitions)
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Key Features

### 1. Product Browsing
- Grid layout with responsive design
- Product images, titles, prices, and ratings
- Discount badges and stock information
- Search functionality across all product fields

### 2. Shopping Cart
- Add products to cart with quantity tracking
- Update quantities or remove items
- Real-time total calculation
- Persistent cart state

### 3. Product Details
- High-quality product images
- Detailed product information
- Add to cart from detail page
- Breadcrumb navigation

### 4. Checkout Process
- Customer information form
- Order summary with item details
- Form validation
- Order placement simulation

### 5. Error Handling
- Network error management
- 404 page for invalid routes
- Loading states during API calls
- User-friendly error messages

## 🚀 Available Scripts

- `npm run dev` - Runs the app in development mode with Vite
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally
- `npm test` - Launches the test runner

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 API Integration

The application fetches data from the DummyJSON API:
- **Products List**: `https://dummyjson.com/products`
- **Single Product**: `https://dummyjson.com/products/{id}`

## 💡 Usage

1. **Browse Products**: View all products on the home page
2. **Search**: Use the search bar to find specific products
3. **Product Details**: Click on any product to view details
4. **Add to Cart**: Use the "Add to Cart" button on product cards or detail page
5. **Manage Cart**: View cart, update quantities, or remove items
6. **Checkout**: Proceed to checkout and fill out the order form

## 🎨 Design Features

- **Modern UI**: Clean, professional design with consistent branding
- **Smooth Animations**: CSS transitions and hover effects
- **Loading States**: Skeleton screens and spinners
- **Interactive Elements**: Hover effects and visual feedback
- **Accessibility**: WCAG compliant with proper focus management

## 🔮 Future Enhancements

- User authentication and accounts
- Product reviews and ratings
- Wishlist functionality
- Payment gateway integration
- Order history and tracking
- Product categories and filters
- Inventory management

## 📄 License

This project is created for educational purposes as part of a React development assessment.

## 🤝 Contributing

This is an educational project. Feel free to fork and experiment with the code.

## 📞 Support

For any questions or issues, please refer to the React documentation or contact the development team.

---

**ShoppyGlobe** - Your one-stop shop for all your needs! 🛍️

gitub link : https://github.com/Neelima-cell/shopeglobal