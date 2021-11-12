import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import AddProductPage from './pages/AddProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductProvider from "./ProductProvider";

function App() {
  return (
    <React.Fragment>
      <h1>Products</h1>      
      <Router>
        <nav>
          <Link to="/">Catalog</Link> | 
          <Link to="/addProduct">Add</Link>
        </nav>
        <ProductProvider>
          <Switch>      
              <Route exact path="/">
                <ProductListingPage />
              </Route>
              <Route exact path="/addProduct">
                <AddProductPage/>
              </Route>          
              <Route exact path="/product/:productId">
                <ProductDetailsPage/>
              </Route>
          </Switch>
        </ProductProvider>

      </Router>
    </React.Fragment>
  );
}

export default App;