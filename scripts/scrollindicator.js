// reflect user's scroll progress as a progress bar

console.log("Starting scrollindicator.js");

window.onscroll = function() {scroll_indicator()};

var bar = document.getElementById("bar");
const clientHeight = document.documentElement.clientHeight;

function scroll_indicator(){
    console.log("scrolling");
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    let height = document.documentElement.scrollHeight - clientHeight;
    
    let scrolled = (winScroll / height) * 100;
    
    bar.style.width = scrolled + "%";
    console.log(scrolled + "%");
}

