import loadHome from "./homeModule";
import loadMenu from "./menuModule";
import loadContact from "./contactModule";

function createNavbar() {
    const nav = document.createElement('nav');
    nav.classList.add('navbar');

    const navList = document.createElement('ul');

    const navHome = createNavBarItem('Home', 'navbar-item');
    const navMenu = createNavBarItem('Menu', 'navbar-item');
    const navContact = createNavBarItem('Contact', 'navbar-item');

    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.appendChild(navContact);
    
    //selected by default is HOME
    navHome.classList.add('active');
    navHome.addEventListener('click', () => {
        navHome.classList.add('active')

        navMenu.classList.remove('active');
        navContact.classList.remove('active');

        loadHome();
    });
    navMenu.addEventListener('click', () => {
        navMenu.classList.add('active');

        navHome.classList.remove('active');
        navContact.classList.remove('active');

        loadMenu();
    });
    navContact.addEventListener('click', () => {
        navContact.classList.add('active');

        navHome.classList.remove('active');
        navMenu.classList.remove('active');

        loadContact();
    });
    nav.appendChild(navList);

    return nav
}


function createNavBarItem(name, className) {
    const item = document.createElement('li');
    item.classList.add(className);
    item.innerText = name;

    return item;
}

function loadNavbar() {
    const content = document.querySelector(".content");
    content.append(createNavbar());
}

export default loadNavbar;