const products = [
  { name: 'T-shirt', price: 20, image: 'tshirt.jpg' },
  // Другие товары
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
