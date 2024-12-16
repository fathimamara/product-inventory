import React, { useState } from 'react';
import EditProduct from './EditProduct';

function ProductTable({ products, editProduct, deleteProduct }) {
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleEditSubmit = (updatedProduct) => {
    editProduct(updatedProduct);
    setEditingProduct(null); // Close the edit form after saving changes
  };

  return (
    <div>
      {editingProduct && <EditProduct product={editingProduct} editProduct={handleEditSubmit} />}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>{product.description}</td>
              <td className="actions">
                <button onClick={() => handleEditClick(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;