(()=>{"use strict";const e=function(e,n){const t=document.createElement("div");return t.innerText=e,t.classList.add(n),t};function n(n,t){const a=e("","opening-hours"),i=e(n,"day"),d=e(t,"time");return i.classList.add("day"),d.classList.add("time"),i.innerText=n,d.innerText=t,a.appendChild(i),a.appendChild(d),a}const t=function(){const t=document.querySelector(".main");t.innerHTML="",t.appendChild(function(){const t=e("","module-home"),a=document.createElement("div");a.classList.add("home-content"),t.style.backgroundImage="url('./img/bg-burger.avif')";const i=document.createElement("h1");i.classList.add("restaurant-title"),i.innerText="Wow Burger!";const d=e("","restaurant-time");return d.appendChild(n("Monday to Friday","10am-9pm")),d.appendChild(n("Saturday","10am-8pm")),d.appendChild(n("Sunday and Holiday","10am-6pm")),a.appendChild(i),a.appendChild(e("Best burger in town!","restaurant-info")),a.appendChild(d),t.appendChild(a),t}())},a=[{name:"Big King",price:11.99},{name:"Whopper",price:12.99},{name:"Bacon King",price:12.99},{name:"Bacon Cheeseburger",price:13.99},{name:"Whopper Jr.",price:10.99},{name:"Triple Whipper With Cheese",price:15.99},{name:"Rodeo Burger",price:8.99}];const i=function(){const n=document.querySelector(".main");n.innerHTML="",n.appendChild(function(){const n=e("","module-menu");n.style.backgroundImage="url('./img/bg-menu.jpg')";const t=e("","module-title"),i=e("","line"),d=e("","line"),c=e("MENU","text");t.appendChild(i),t.appendChild(c),t.appendChild(d);const r=e("","menu-board");return a.forEach((n=>{r.appendChild(function(n,t){const a=e("","menu-item"),i=document.createElement("h3");i.innerText=n;const d=e("","div");return d.innerText=`$${t}`,a.appendChild(i),a.appendChild(d),a}(n.name,n.price))})),n.appendChild(t),n.appendChild(r),n}())};function d(n,t,a,i=null){const d=e("","form-control"),c=document.createElement("label");c.setAttribute("for",t),c.innerHTML=n;const r=document.createElement(a);return r.setAttribute("id",t),r.setAttribute("name",t),null!==i&&r.setAttribute("type",i),d.appendChild(c),d.appendChild(r),d}function c(e,n){const t=document.createElement("li");return t.classList.add(n),t.innerText=e,t}const r=function(){document.querySelector(".content").append(function(){const n=document.createElement("nav");n.classList.add("navbar");const a=document.createElement("ul"),r=c("Home","navbar-item"),o=c("Menu","navbar-item"),s=c("Contact","navbar-item");return a.appendChild(r),a.appendChild(o),a.appendChild(s),r.classList.add("active"),r.addEventListener("click",(()=>{r.classList.add("active"),o.classList.remove("active"),s.classList.remove("active"),t()})),o.addEventListener("click",(()=>{o.classList.add("active"),r.classList.remove("active"),s.classList.remove("active"),i()})),s.addEventListener("click",(()=>{s.classList.add("active"),r.classList.remove("active"),o.classList.remove("active"),function(){const n=document.querySelector(".main");n.innerHTML="",n.appendChild(function(){const n=e("","module-contact");n.style.backgroundImage="url('./img/bg-contact.avif')";const t=e("","contact-form"),a=document.createElement("form");a.appendChild(d("Full Name","fname","input","text")),a.appendChild(d("Email","email","input","email")),a.appendChild(d("Message","message","textarea")),t.append(a);const i=document.createElement("button");i.classList.add("btn-submit"),i.innerHTML="Submit",t.appendChild(i);const c=e("","contact-info"),r=e("","info"),o=document.createElement("p");o.innerText="Address: This is the Address";const s=document.createElement("p");s.innerText="Email: support@wowburger.ca";const l=document.createElement("p");l.innerText="Phone: 778-123-1234",r.append(o),r.append(s),r.append(l);const p=e("","map-container");p.innerHTML='<iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167092.28381339347!2d-122.98481376063938!3d49.12811184446249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d98745f04b5f%3A0x4b614c277902e881!2sOpenbox.ca!5e0!3m2!1sen!2sca!4v1649484156645!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',c.appendChild(r),c.appendChild(p);const m=e("","contact");return m.appendChild(t),m.appendChild(c),n.appendChild(m),n}())}()})),n.appendChild(a),n}())};r(),t()})();