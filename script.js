import { productDataFetch } from './products.js';
import { initUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    productDataFetch();
    initUI();
});
