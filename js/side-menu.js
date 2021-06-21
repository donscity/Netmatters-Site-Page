
function menuButton() { 
    document.getElementById("page").classList.remove("menu-closed");
    document.getElementById("page").classList.add("menu-open");
    document.getElementById("menu-shadow").classList.add("menu-open");
};

function closeMenu() { 
    document.getElementById("page").classList.remove("menu-open");
    document.getElementById("page").classList.add("menu-closed");
    document.getElementById("menu-shadow").classList.remove("menu-open");
};