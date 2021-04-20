
var images = document.getElementById("slide-image").children;
var i = 1;
var bars = document.getElementsByClassName("down");
images[0].style.display = "block";
images[0].style.opacity = "1";
bars[0].style.borderBottom = "2px solid #9a8194";

function slide(){
    images[i].style.opacity = "1";
    bars[i].style.borderBottom = "2px solid #9a8194";

    if(i == 0){
        images[images.length - 1].style.opacity = "0";
        bars[images.length - 1].style.borderBottom = "2px solid white";
    }
    else{
        images[i - 1].style.opacity = "0";
        bars[i - 1].style.borderBottom = "2px solid white";
    }
    
    i++;

    if(i == images.length){
        i = 0;
    }
}

setInterval(slide, 3000);