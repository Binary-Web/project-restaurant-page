function createHome() {
    const homeModule = createDiv("", "module-home");
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.classList.add('restraurant-title');
    
    const restaurantTime = createDiv("", "restaurant-time");

    restaurantTime.appendChild(createHoursOpen("Monday to Friday", "10am-9pm"))
    restaurantTime.appendChild(createHoursOpen("Saturday", "10am-8pm"));
    restaurantTime.appendChild(createHoursOpen("Sunday and Holiday", "10am-6pm"));

    homeContent.appendChild(restaurantTitle.innerText = "Wow Burger!");
    homeContent.appendChild(createDiv("Best burger in town since 1995", "restaurant-title"));
    homeContent.appendChild(restaurantTime);
    homeContent.appendChild(createDiv("Come visit as in 3988 Despard Street."));

    homeModule.appendChild(homeContent);

}

//day and time will be string
function createHoursOpen(day, time) {
    const div = createDiv("", "opening-hours")
    const divDay = createDiv(day, "day");
    const divTime = createDiv(time, "time");
    
    divDay.classList.add('day');
    divTime.classList.add('time');

    divDay.innerText =  day;
    divTime.innerText = time;

    div.appendChild(divDay);
    div.appendChild(divTime);

    return div;
}


function createDiv(text, className) {
    const div = document.createElement('div');
    div.innerText = text;
    div.classList.add(className);
    return div;
}

function loadHome() {
    const main = document.querySelector(".content");
    main.appendChild(createHome());
}

export default loadHome;