window.addEventListener('load', loaded);

function loaded() {
    const sun = document.querySelector(".sun");
    const body = document.querySelector("body");
    
    sun.onclick = function() {
        body.classList.toggle('dark');
    }
}