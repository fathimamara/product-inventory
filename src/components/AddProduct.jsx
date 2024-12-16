import React, { useState } from 'react';

function AddProduct({ addProduct }) {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    stockQuantity: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    product.id = Date.now(); // Ensure unique ID for each product
    addProduct(product);
    setProduct({
      id: '',
      name: '',
      category: '',
      price: '',
      stockQuantity: '',
      description: ''
    });
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Product Name" required />
      <input type="text" name="category" value={product.category} onChange={handleChange} placeholder="Category" required />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" required />
      <input type="number" name="stockQuantity" value={product.stockQuantity} onChange={handleChange} placeholder="Stock Quantity" required />
      <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" required></textarea>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;