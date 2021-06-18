window.onscroll = function() {scrollUp()};
window.onscroll = function() {scrollDown()};


var header = document.querySelector("header");
var pageTop = document.getElementById("top");

var sticky = header.offsetTop;

let lastScroll = 0;

let headHeight = header.offsetHeight;

function scrollDown(){ 
    var currentScroll = window.pageYOffset;
    if (currentScroll < lastScroll && currentScroll > headHeight){
        header.classList.remove("scroll-up");
        header.classList.add("sticky");
        pageTop.style.paddingTop = headHeight+"px";
    } else if (currentScroll > lastScroll){
        if(currentScroll >= headHeight){
            header.classList.add("scroll-up");
            setTimeout(function(){reset()}, 300);
        } else {
            reset()
        }
    }
    lastScroll = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
};

function reset(){
    header.classList.remove("sticky");
    pageTop.style.paddingTop = "0";
}