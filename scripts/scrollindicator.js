// hello ma'am, fancy seeing you here
// reflect user's scroll progress as a progress bar

document.addEventListener('DOMContentLoaded', function(){
    const bar = document.getElementById('bar');
    const clientHeight = document.documentElement.clientHeight;
    
    document.addEventListener('scroll', function(){
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        
        let height = document.documentElement.scrollHeight - clientHeight;
        
        let scrolled = (winScroll/height)*100;
        
        bar.style.width = scrolled + '%';
    });
});
