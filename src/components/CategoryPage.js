import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import ProductCard from './ProductCard';
import '/Users/tejas/Documents/Code/React JS/e-com/src/styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const categoryProducts = products[category] || [];

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <div className="product-list">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
