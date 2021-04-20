
var div = document.getElementById("menu-button");
var c = div.children;
var x1 = c[0].getBoundingClientRect().top;
var y1 = c[0].getBoundingClientRect().left;
function notAccessedMenu(){
    c[2].style.display = "none";
    c[0].style.marginTop = "0px";
    c[1].style.marginTop = "0px";
    c[2].style.marginTop = "0px";
    c[0].style.transform = "rotate(45deg)";
    c[1].style.transform = "rotate(135deg)";
}

function accessedMenu(){
    c[2].style.display = "block";
    c[0].style.transform = "rotate(180deg)";
    c[1].style.transform = "rotate(180deg)";
    c[0].style.marginTop="20%";
    c[1].style.marginTop="20%";
    c[2].style.marginTop="20%";
}

var ok = 0;

div.onclick = function(){
    if (ok == 0){
        notAccessedMenu();
        ok = 1;
        document.getElementById("menu").style.left="0";
    }
    else{
        accessedMenu();
        ok = 0;
        document.getElementById("menu").style.left="-40%";
    }
}

