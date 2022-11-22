

const reset = function(){
    let content = document.getElementById("content")
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }


}

export {reset}