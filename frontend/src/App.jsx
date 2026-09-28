import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './features/products/productSlice'

function App() {
  const dispatch = useDispatch();

const products = useSelector((state) => state.products.items);
const handleAddProduct = () => {
  dispatch(
    addProduct({
      id: 1,
      name: "T-shirt",
      price: 500,
    })
  );
};
return (
  <div>
    <button onClick={handleAddProduct}>Add Product</button>

    {products.map((product) => (
      <p key={product.id}>
        {product.name} - ₹{product.price}
      </p>
    ))}
  </div>
);
}

export default App
