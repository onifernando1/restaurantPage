import {reset} from "./reset.js";

const createContactPage = function(){
    reset()
    let content = document.getElementById("content")
    let contactForm = document.createElement("div")
    contactForm.innerHTML = "Contact form"
    content.appendChild(contactForm)
}

export {createContactPage}