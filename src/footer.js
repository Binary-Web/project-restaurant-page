import createDiv from "./createDiv";

function createFooter() {
    const githubURL = "https://github.com/Binary-Web";
    const footer = createDiv('', 'footer');
    const githubIcon = document.createElement('span');
    githubIcon.classList.add("mdi");
    githubIcon.classList.add("mdi-github")

    const footerLink = document.createElement('a');
    footerLink.setAttribute('href', githubURL);
    footerLink.append(githubIcon);

    footer.appendChild("Created by ");
    footer.appendChild(footerLink);

    return footer;
}

function loadFooter() {
    const content = document.querySelector('.content');
    content.append(createFooter());
}

export default loadFooter;