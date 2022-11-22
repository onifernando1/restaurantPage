import {reset} from "./reset.js";

const createMenuPage = function(){
    reset()
    let content = document.getElementById("content")
    let menu = document.createElement("div")
    menu.innerHTML = "MENU"
    content.appendChild(menu)
}

export {createMenuPage}