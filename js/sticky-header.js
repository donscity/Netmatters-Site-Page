window.onscroll = function() {scrollUp()};


var header = document.querySelector("header");
var pageTop = document.getElementById("top");

var sticky = header.offsetTop;

let lastScroll = 0;

let headHeight = header.offsetHeight;

function scrollUp(){ 
    var currentScroll = window.pageYOffset;
    if (currentScroll < lastScroll && currentScroll > headHeight){
        header.classList.add("sticky");
        pageTop.style.paddingTop = headHeight+"px";
    } else if (currentScroll > lastScroll){
        header.classList.remove("sticky");
        pageTop.style.paddingTop = "0";
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};