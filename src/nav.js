import { createHomePage } from "./homePage";
import { createContactPage } from "./contact";
import { createMenuPage } from "./menu";


const createNav = function() {


    let header = document.getElementById("header")

    let homeButton = document.createElement("button")
    let contactButton = document.createElement("button")
    let menuButton = document.createElement("button")

    homeButton.addEventListener("click", function(){createHomePage()})
    contactButton.addEventListener("click", function(){createContactPage()})
    menuButton.addEventListener("click", function(){createMenuPage()})

    header.appendChild(homeButton)
    header.appendChild(contactButton)
    header.appendChild(menuButton)
}

export {createNav}