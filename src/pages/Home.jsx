import React, { useEffect, useState } from 'react';

import Header from '../components/Header';
import Product from '../components/Product';

const API = 'https://shopping-cart-api.diegoregino.now.sh/api/products';

const getProducts = async(setProducts) => {
  // console.log()   
  try {
    const result = await fetch(API);
    const products = await result.json();
    setProducts(products); 
    
  } catch (error) {
    console.error('Error :(', error);
  }
}

const Home = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const productsList = products.map((product) => (
    <div key={product._id} className="col-lg-4 col-md-6 mb-4">
      <Product  {...product} />
    </div>)
  )

  return (
    <>
      <Header/>
      <div className="container mt-4">
        <div className="row">
          { /*inicio render de lista de productos*/}          
          {productsList}
          { /*final render de lista de productos*/}
        </div>
      </div>
    </>
  );
};

export default Home;