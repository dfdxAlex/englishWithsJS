import { getAllUsers } from './controllers/userController.js';
import { getAllProducts } from './controllers/productController.js';

export function renderUserPage(appElement) {
    const users = getAllUsers();
    appElement.innerHTML = users.map(user => `<p>${user.name}</p>`).join('');
}

export function renderProductPage(appElement) {
    const products = getAllProducts();
    appElement.innerHTML = products.map(product => `<p>${product.name}</p>`).join('');
}
