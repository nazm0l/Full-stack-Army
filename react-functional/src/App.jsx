import React, { useState } from "react";
import Counter from "./components/Counter";

const productsList = [
  {
    id: 1,
    productName: "Mouse",
    stock: 8,
    price: 700,
  },
  {
    id: 2,
    productName: "Keyboard",
    stock: 18,
    price: 650,
  },
  {
    id: 3,
    productName: "RAM",
    stock: 9,
    price: 2000,
  },
  {
    id: 4,
    productName: "SSD",
    stock: 8,
    price: 7000,
  },
];

const App = () => {
  const [products, setProducts] = useState(
    productsList.map((item) => ({ ...item, quantity: 0, total: 0 }))
  );

  const handleInc = (id) => {
    setProducts(
      products.map((product) => {
        if (id == product.id && product.stock > product.quantity) {
          product.quantity++;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  const handleDec = (id) => {
    setProducts(
      products.map((product) => {
        if (id == product.id && product.quantity > 0) {
          product.quantity--;
          product.total = product.quantity * product.price;
        }
        return product;
      })
    );
  };

  return (
    <div className="app">
      <div>
        <h1>Product List</h1>
        <table>
          <th>ID</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <tbody>
            {products.map((product) => (
              <Counter
                key={product.id}
                {...product}
                handleInc={handleInc}
                handleDec={handleDec}
              />
            ))}
          </tbody>
        </table>
        {total > 0 && <p>Total Price: {total}</p>}
      </div>
    </div>
  );
};

export default App;
