// hello ma'am, fancy seeing you here
// imitate eye animation, showing a new image every time user
// hovers pointer over eye

document.addEventListener('DOMContentLoaded', function(){
    const imageElements = document.getElementsByClassName('blink-images');
    const images = Array.prototype.map.call(imageElements, function(imageElement) {
        return imageElement.src;
    })
    const imageCount = images.length;
    
    const eye = document.querySelector('.image-eye-opening-reveal');
    const hint = document.querySelector('#image-eye-opening-reveal-hint');
    
    let blinkCount = 0;
    eye.addEventListener('pointerover', function(){
        eye.style.background = `url(${images[blinkCount%imageCount]}) no-repeat`;
        eye.style.backgroundSize = 'cover';
        blinkCount++;
    });

    eye.addEventListener('pointerout', function(){
     	hint.style.visibility = 'hidden';
        eye.style.background = '';
    });
});
