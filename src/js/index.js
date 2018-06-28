import 'normalize.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import '../css/style.css';


var doc = document;
var btnMenu = doc.getElementById('menu-btn');

function showBtnMenu(){
    var humbergerMenu = doc.getElementById('menu-humberger');
    btnMenu.classList.toggle('menu-btn--active');
    humbergerMenu.classList.toggle('menu__humberger--active');
};

btnMenu.onclick = showBtnMenu;
