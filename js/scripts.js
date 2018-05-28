/* document.addEventListener("DOMContentLoaded", function() {
    let htmlWrapper = document.querySelector("#wrapper");
    let htmlTopLayer = htmlWrapper.querySelector(".top");
    let htmlHandle = htmlWrapper.querySelector(".handle");
    let skew = 0;
    let delta = 0;
    
    //if skewed class not found on wrapper, do nothing
    if (htmlWrapper.className.indexOf("skewed") != -1) {
        //set to 1000 to match the .skewed margins
        skew = 1000;
    }
    
    htmlWrapper.addEventListener("mousemove", function(event) {
        //creates a slight offset by using the mouseX pos and the window innerWidth
        delta = (event.clientX - window.innerWidth / 2) / 2;
        //uses the delta offset and sets the left attr
        htmlHandle.style.left = event.clientX + delta + "px";
        //mirrors the handle offset with the width, 'exposing' the top layer
        htmlTopLayer.style.width = event.clientX + skew + delta + "px";
    })
}); */

document.addEventListener("DOMContentLoaded", function() {
    let htmlWrapper = document.querySelector("#wrapper");
    let htmlTopLayer = htmlWrapper.querySelector(".top");
    let htmlHandle = htmlWrapper.querySelector(".handle");
    let skew = 0;
    let delta = 0;
    
    //if skewed class not found on wrapper, do nothing
    if (htmlWrapper.className.indexOf("skewed") != -1) {
        //set to 1000 to match the .skewed margins
        skew = 1000;
    }
    
    htmlWrapper.addEventListener("pointermove", function(event) {
        //creates a slight offset by using the mouseX pos and the window innerWidth
        delta = (event.clientX - window.innerWidth / 2) / 2;
        //uses the delta offset and sets the left attr
        htmlHandle.style.left = event.clientX + delta + "px";
        //mirrors the handle offset with the width, 'exposing' the top layer
        htmlTopLayer.style.width = event.clientX + skew + delta + "px";
    })
});