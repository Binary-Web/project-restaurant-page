import createDiv from "./createDiv";

const menu = [
    {
        name: "Big King",
        price: 11.99
    },
    {
        name: "Whopper",
        price: 12.99
    },
    {
        name: "Bacon King",
        price: 12.99
    },
    {
        name: "Bacon Cheeseburger",
        price: 13.99
    },
    {
        name: "Whopper Jr.",
        price: 10.99
    },
    {
        name: "Triple Whipper With Cheese",
        price: 15.99
    },
    {
        name: "Rodeo Burger",
        price: 8.99
    }

]

function createMenu() {
    const bgUrl = "./img/bg-menu.jpg"
    const menuModule = createDiv("", "module-menu");
    menuModule.style.backgroundImage = `url('${bgUrl}')`;

    const moduleTitleContainer = createDiv("", "module-title");
    const moduleTitleLineLeft = createDiv("", "line"); //THIS IS FOR THE LINES BESIDE THE TITLE
    const moduleTitleLineRight = createDiv("", "line"); //THIS IS FOR THE LINES BESIDE THE TITLE
    const moduleTitle = createDiv("MENU", "text");

    //THIS IS FOR "--------MENU---------"
    moduleTitleContainer.appendChild(moduleTitleLineLeft);
    moduleTitleContainer.appendChild(moduleTitle);
    moduleTitleContainer.appendChild(moduleTitleLineRight);

    //MAKING THE LIST OF MENU
    const menuBoard = createDiv("", "menu-board");
    menu.forEach(item => {
        menuBoard.appendChild(createMenuCard(item.name, item.price));
    })

    menuModule.appendChild(moduleTitleContainer);
    menuModule.appendChild(menuBoard);

    return menuModule;
}

function createMenuCard(name, price) {
    const menuItemContainer = createDiv("", "menu-item");

    const itemName = document.createElement('h3');
    itemName.innerText = name;

    const itemPrice = createDiv('', "div");
    itemPrice.innerText = `$${price}`;

    menuItemContainer.appendChild(itemName);
    menuItemContainer.appendChild(itemPrice);

    return menuItemContainer;
}

function loadMenu() {
    const main = document.querySelector(".main");
    main.innerHTML = "";
    main.appendChild(createMenu());
}

export default loadMenu;

