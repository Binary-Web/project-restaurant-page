function createDiv(text, className) {
    const div = document.createElement('div');
    div.innerText = text;
    div.classList.add(className);
    return div;
}

export default createDiv;