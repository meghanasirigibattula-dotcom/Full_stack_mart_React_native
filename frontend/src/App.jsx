import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './features/products/productSlice'

function App() {
  const dispatch = useDispatch();

const products = useSelector((state) => state.products.items);
const [name, setName] = useState("");
const[price,setPrice]=useState(0);
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
    <input value={price} onChange={(e) => setPrice(Number(e.target.value))} placeholder="Product price" type="number" />

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
