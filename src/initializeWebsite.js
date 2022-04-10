import loadHome from "./homeModule";
import loadNavbar from "./navbar";

function initializeWebsite() {
    loadNavbar();
    loadHome();
}

export default initializeWebsite;