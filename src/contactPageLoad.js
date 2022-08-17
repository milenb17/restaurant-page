

export default function contactPageLoad() {
    const content = document.querySelector("#content");
    content.innerHTML = '';
    const head = document.createElement('h1');
    head.textContent = "Contact Us";
    content.appendChild(head);
    const copy = document.createElement('p');
    copy.textContent = "Phone: 000-000-0000"
    content.appendChild(copy);

}