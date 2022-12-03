import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
  const { state: { products, loading, error, cart } } = useProducts();
  console.log(products[0], "product");
  let content;
  if (loading) {
    content = <p>Loading</p>
  }
  if (error) {
    content = <p>Error found</p>
  }
  if (!loading && !error && cart.length === 0) {
    content = <p>Nothing to show here!!</p>
  }
  if (!loading && !error && cart.length) {
    content = cart.map(p => <ProductCard key={p._id} products={p}></ProductCard>)
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
      {content}
    </div>
  );
};

export default Cart;