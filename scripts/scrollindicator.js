// reflect user's scroll progress as a progress bar

window.onscroll = function() {scroll_indicator()};

const bar = document.getElementById("bar");
const clientHeight = document.documentElement.clientHeight;

function scroll_indicator(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
    let height = document.documentElement.scrollHeight - clientHeight;
    
    let scrolled = (winScroll / height) * 100;
    
    bar.style.width = scrolled + "%";
}

