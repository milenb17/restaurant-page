import Restaurant from './restaurant.jpg';

export default function homePageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const head = document.createElement('h1');
    head.textContent = "Milen's Pizzaria";
    content.appendChild(head);
    const img = document.createElement('img');
    img.src = Restaurant;
    img.width = "500";
    content.appendChild(img);
    const copy = document.createElement('p');
    copy.textContent = "This is the greatest restaurant on earth. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    content.appendChild(copy);

}