

var page = document.getElementById("page");
var header = document.querySelector("header");
var pageTop = document.getElementById("top");

var sticky = header.offsetTop;

let lastScroll = 0;

let headHeight = header.offsetHeight;

function scrollMenu(){ 
    var currentScroll = page.scrollTop;
    if (currentScroll < lastScroll && currentScroll > headHeight){
        header.classList.remove("slide-up");
        header.classList.add("sticky");
        pageTop.style.paddingTop = headHeight+"px";
    } else if (currentScroll > lastScroll){
        if(currentScroll >= headHeight){
            header.classList.add("slide-up");
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

