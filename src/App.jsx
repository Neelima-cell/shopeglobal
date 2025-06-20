import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import './App.css';

// Import Header directly (not lazy loaded since it's always needed)
import Header from './components/Header';

// Lazy loading components for performance optimization
const ProductList = React.lazy(() => 
  import('./components/ProductList').catch(() => ({ 
    default: () => <div>Error loading ProductList component</div> 
  }))
);

const ProductDetail = React.lazy(() => 
  import('./components/ProductDetail').catch(() => ({ 
    default: () => <div>Error loading ProductDetail component</div> 
  }))
);

const Cart = React.lazy(() => 
  import('./components/Cart').catch(() => ({ 
    default: () => <div>Error loading Cart component</div> 
  }))
);

const Checkout = React.lazy(() => 
  import('./components/Checkout').catch(() => ({ 
    default: () => <div>Error loading Checkout component</div> 
  }))
);

const NotFound = React.lazy(() => 
  import('./components/NotFound').catch(() => ({ 
    default: () => <div>Error loading NotFound component</div> 
  }))
);

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Something went wrong.</h2>
          <p>Please refresh the page and try again.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component with routing and Redux store
function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}

export default App; 