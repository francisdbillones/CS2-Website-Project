function blink(){
    const classObjects = document.getElementsByClassName("blink-images");
    const images = Array.prototype.map.call(classObjects, function(imageObject) {
        return imageObject.src;
    })
    const imageCount = images.length;
    
    let blinkCount = 0;
    
    const eye = document.querySelector(".image-eye-opening-reveal");
    
    const hint = document.querySelector("#image-eye-opening-reveal-hint");

    const donationSection = document.querySelector("#donation-section");
    eye.addEventListener("pointerover", () => {
        console.log("Opening eye, setting background to image");
        blinkCount += 1;
        eye.style.background = `url(${images[(blinkCount-1)%imageCount]}) no-repeat`;
        eye.style.backgroundSize = "cover";
    });

    eye.addEventListener("pointerout", () => {
     	hint.style.visibility = "hidden";
        console.log("Closing eye, setting background to black");
        eye.style.background = "";
    });
}
