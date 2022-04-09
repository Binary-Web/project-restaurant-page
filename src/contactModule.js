import createDiv from "./createDiv";

function createContact() {
    const mapIframe = `<iframe class="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d167092.28381339347!2d-122.98481376063938!3d49.12811184446249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d98745f04b5f%3A0x4b614c277902e881!2sOpenbox.ca!5e0!3m2!1sen!2sca!4v1649484156645!5m2!1sen!2sca" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    const bgUrl = './img/bg-contact.avif';
    const contactModule = createDiv("", "module-contact");
    contactModule.style.backgroundImage = `url('${bgUrl}')`;

    const contactForm = createDiv("", "contact-form");
    const form = document.createElement("form");
    form.appendChild(createFormControl("Full Name","fname", "input", "text"))
    form.appendChild(createFormControl("Email", "email", "input", "email"))
    form.appendChild(createFormControl("Message", "message", "textarea"))
    contactForm.append(form);

    const btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn-submit');
    btnSubmit.innerHTML = "Submit";
    contactForm.appendChild(btnSubmit);

    const contactInfo = createDiv('', 'contact-info');
    const info = createDiv('', 'info');
    
    const pAddress = document.createElement('p');
    pAddress.innerText = "Address: This is the Address";

    const pEmail = document.createElement('p');
    pEmail.innerText = "Email: support@wowburger.ca";

    const pPhone = document.createElement('p');
    pPhone.innerText = "Phone: 778-123-1234";

    info.append(pAddress);
    info.append(pEmail);
    info.append(pPhone);
    const mapContainer = createDiv('', 'map-container');
    mapContainer.innerHTML = mapIframe;
    contactInfo.appendChild(info);
    contactInfo.appendChild(mapContainer);

    const contactDiv = createDiv('', 'contact');
    contactDiv.appendChild(contactForm);
    contactDiv.appendChild(contactInfo);

    contactModule.appendChild(contactDiv);

    return contactModule
}

function createFormControl(labelValue ,id, inputType, optionalType = null) {
    const formControlDiv = createDiv("", "form-control");
    
    const label = document.createElement('label');
    label.setAttribute('for', id);
    label.innerHTML = labelValue;

    const textBox = document.createElement(inputType);
    textBox.setAttribute('id', id);
    textBox.setAttribute('name', id);
    if(optionalType !== null) {
        textBox.setAttribute('type', optionalType);
    }

    formControlDiv.appendChild(label);
    formControlDiv.appendChild(textBox);

    return formControlDiv;
}

function loadContact() {
    const main = document.querySelector('.content');
    main.appendChild(createContact());
}

export default loadContact;