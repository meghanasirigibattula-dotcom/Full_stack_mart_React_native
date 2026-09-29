import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from './features/products/productSlice'
import { addToCart } from './features/products/cartSlice'

function App() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.items);

  // 👇 ADD THIS LINE
  const cartItems = useSelector((state) => state.cart.items);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: Date.now(),
        name: name,
        price: price,
      })
    );
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product name"
      />

      <input
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Product price"
        type="number"
      />

      <button onClick={handleAddProduct}>
        Add Product
      </button>

      <h3>Cart Items: {cartItems.length}</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>

          <button onClick={() => dispatch(removeProduct(product.id))}>
            Delete
          </button>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default App