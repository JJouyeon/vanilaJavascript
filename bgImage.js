const images = ["2.jpg", "4.jpg", "6.jpg", "7.jpg"];

const body = document.querySelector("body");
const btn = document.querySelector("#bgBtn");

function handleclick () {
    const bgImage = images[Math.floor(Math.random() * images.length)];
    
    body.style.backgroundImage  = `url('bgImage/${bgImage}')`
}

handleclick () ;