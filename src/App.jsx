import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import ProductTable from './components/ProductTable';
import FilterProducts from './components/FilterProduct';
import './styles.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const editProduct = (updatedProduct) => {
    const updatedProducts = products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Product Inventory</h1>
      <AddProduct addProduct={addProduct} />
      <FilterProducts products={products} setFilteredProducts={setFilteredProducts} />
      <ProductTable 
        products={filteredProducts} 
        editProduct={editProduct} 
        deleteProduct={deleteProduct} 
      />
    </div>
  );
}

export default App;