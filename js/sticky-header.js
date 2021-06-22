

var page = document.getElementById("page");
var header = document.querySelector("header");
var pageTop = document.getElementById("top");

var sticky = header.offsetTop;

let lastScroll = 0;



function scrollMenu(){ 
    let headHeight = header.offsetHeight;
    let currentScroll = page.scrollTop;
    if (currentScroll < lastScroll && currentScroll > headHeight){
        header.classList.remove("slide-up");
        header.classList.add("sticky");
        header.style.width = "calc( 100% - "+getScrollbarWidth()+"px )";
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
    header.style.width = "100%";
}



function getScrollbarWidth() {

    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);
  
    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);
  
    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  
    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
  
    return scrollbarWidth;
  
  }