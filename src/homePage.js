import {reset} from "./reset.js";

const createHomePage = function(){

    reset()

    let content = document.getElementById("content")

    let title = document.createElement("div")
    title.className = "title"
    title.innerHTML = "THe best restaurant"
    content.appendChild(title)

    let foodImage = document.createElement("img")
    foodImage.src = "food.jpg"
    content.appendChild(foodImage)

    let comment = document.createElement("div")
    comment.className = "comment"
    comment.innerHTML = "This food is the best food in the world"
    content.appendChild(comment)

}

export {createHomePage}
