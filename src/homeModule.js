import createDiv from "./createDiv";

function createHome() {
    const bgUrl = './img/bg-burger.avif';
    const homeModule = createDiv("", "module-home");
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    homeModule.style.backgroundImage = `url('${bgUrl}')`;

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.classList.add('restaurant-title');
    restaurantTitle.innerText = "Wow Burger!";
    
    const restaurantTime = createDiv("", "restaurant-time");

    restaurantTime.appendChild(createHoursOpen("Monday to Friday", "10am-9pm"))
    restaurantTime.appendChild(createHoursOpen("Saturday", "10am-8pm"));
    restaurantTime.appendChild(createHoursOpen("Sunday and Holiday", "10am-6pm"));

    homeContent.appendChild(restaurantTitle);
    homeContent.appendChild(createDiv("Best burger in town!", "restaurant-info"));
    homeContent.appendChild(restaurantTime);

    homeModule.appendChild(homeContent);

    return homeModule;

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

function loadHome() {
    const main = document.querySelector(".content");
    main.appendChild(createHome());
}


export default loadHome