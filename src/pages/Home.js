import React from 'react';
import { useProducts } from '../context/ProductProvider';
// import { ProductCard } from '../components/ProductCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { state: { products, loading, error } } = useProducts();
  console.log(products[0], "product");
  let content;
  if (loading) {
    content = <p>Loading</p>
  }
  if (error) {
    content = <p>Error found</p>
  }
  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show here!!</p>
  }
  if (!loading && !error && products.length) {
    content = products.map(p => <ProductCard key={p._id} products={p}></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Home;