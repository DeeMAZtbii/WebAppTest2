import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Футболка', price: 500 },
  { id: 2, name: 'Джинсы', price: 1500 },
  { id: 3, name: 'Кроссовки', price: 2000 },
  // ...другие товары
];
const gallery = document.querySelector('.gallery'); 

products.forEach(product => {
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
  `;
  gallery.appendChild(item);
});

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Интернет-магазин</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Цена: {product.price} ₽</p>
            <button onClick={() => addToCart(product)}>Добавить в корзину</button>
          </div>
        ))}
      </div>
      <h2>Корзина</h2>
      {cart.length === 0 && <p>Корзина пуста</p>}
      {cart.map((product, index) => (
        <div key={index}>
          <h4>{product.name}</h4>
          <p>Цена: {product.price} ₽</p>
        </div>
      ))}
    </div>
  );
};

export default App;
