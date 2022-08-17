import homePageLoad from './homePageLoad.js'
import menuPageLoad from './menuPageLoad.js'
import contactPageLoad from './contactPageLoad.js'


const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', function(e) {
    switch (e.target.id) {
        case 'menu':
            menuPageLoad();
            break;
        case 'contact':
            contactPageLoad();
            break;
        case 'home':
            homePageLoad();
    }
}));
homePageLoad();