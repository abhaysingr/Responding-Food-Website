import { addToCart } from './cart.js';

let productList = [];
const cardList = document.querySelector('.card-list');

const showCards = () => {
  cardList.innerHTML = '';
  productList.forEach((product) => {
    const orderCard = document.createElement('div');
    orderCard.classList.add('order-card');
    orderCard.innerHTML = `
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.price}</h4>
      <button class="btn cart-btn">Add to Cart</button>
    `;
    cardList.appendChild(orderCard);

    const cartBtn = orderCard.querySelector('.cart-btn');
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(product);
    });
  });
};

const productDataFetch = async () => {
  try {
    const data = await fetch('products.json');
    const json = await data.json();
    productList = json;
    showCards();
  } catch (error) {
    console.error('Error fetching product data:', error);
  }
};

export { productDataFetch, productList };
