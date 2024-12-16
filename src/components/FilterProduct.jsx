import React, { useState } from 'react';

function FilterProducts({ products, setFilteredProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    let filtered = products;

    if (category) {
      filtered = filtered.filter(product => 
        product.category.toLowerCase().includes(category.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="filter-form">
      <input 
        type="text" 
        placeholder="Search by name" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Filter by category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
}

export default FilterProducts;