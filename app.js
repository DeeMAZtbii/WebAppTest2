const products = [
  { name: 'Курица с терияки', price: 220, image: 'kurter.jpg' },
  // Другие товары
];

const gallery = document.querySelector('.gallery');

products.forEach(product => {
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} руб</p>
  `;
  gallery.appendChild(item);
});
