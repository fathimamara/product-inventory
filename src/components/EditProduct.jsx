import React, { useState, useEffect } from 'react';

function EditProduct({ product, editProduct }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  useEffect(() => {
    setUpdatedProduct(product); // Update the state when the product prop changes
  }, [product]);

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct(updatedProduct);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={updatedProduct.name} onChange={handleChange} required />
      <input type="text" name="category" value={updatedProduct.category} onChange={handleChange} required />
      <input type="number" name="price" value={updatedProduct.price} onChange={handleChange} required />
      <input type="number" name="stockQuantity" value={updatedProduct.stockQuantity} onChange={handleChange} required />
      <textarea name="description" value={updatedProduct.description} onChange={handleChange} required></textarea>
     <div style={{display:'flex'}}>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={() => setUpdatedProduct(null)}>Cancel</button>
     </div>
    </form>
  );
}

export default EditProduct;