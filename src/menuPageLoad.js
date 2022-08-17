import Pizza from './pizza.jpeg';
import Burger from './burger.jpeg';

export default function menuPageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const head = document.createElement('h1');
    head.textContent = "Menu";
    content.appendChild(head);
    const pizzaImg = document.createElement('img');
    pizzaImg.src = Pizza;
    pizzaImg.width = "500";
    content.appendChild(pizzaImg);
    const pizzaCap = document.createElement('p');
    pizzaCap.textContent = "Pizza - $11"
    content.appendChild(pizzaCap);
    const burgerImg = document.createElement('img');
    burgerImg.src = Burger;
    burgerImg.width = "500";
    content.appendChild(burgerImg);
    const burgerCap = document.createElement('p');
    burgerCap.textContent = "burger - $11"
    content.appendChild(burgerCap);

}