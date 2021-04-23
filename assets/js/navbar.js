// Navbar Color Transparent
var nav = document.querySelector(".navbar");
var toggleIcon = document.querySelector(".toggle-icon");
var isClose = toggleIcon.classList.contains('fa-times'); 

window.onscroll = function () {
    if(!isClose){
        if (window.pageYOffset > 100) {
            nav.style.background = "#222";
        }
        else {
            nav.style.background = "transparent";
        }
    }
    }

// Toggle Menu
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {

    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars toggle-icon'></i>";
        toggleIcon = document.querySelector(".toggle-icon");
        isClose = toggleIcon.classList.contains('fa-times'); 
    } else {
        menu.classList.add('active');
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times toggle-icon'></i>";
        nav.style.background = "#222";
        toggleIcon = document.querySelector(".toggle-icon");
        isClose = toggleIcon.classList.contains('fa-times'); 
    }

}

toggle.addEventListener('click', toggleMenu, false);

// Submenu
const items = document.querySelectorAll(".item");

function toggleItem() {
    console.log(this);
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

for (let item of items) {
    if (item.querySelector('.submenu')) {
        item.addEventListener('click', toggleItem, false);
        item.addEventListener('keypress', toggleItem, false);
    }
    if (item.querySelector('.submenu-spread')) {
        item.getElementsByClassName("icon-down")[0].addEventListener('click', toggleItem.bind(item), false);
        item.getElementsByClassName("icon-down")[0].addEventListener('keypress', toggleItem, false);
    }
}



// Close submenu from anywhere in the page
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector('.submenu-active')) {
        menu.querySelector('.submenu-active').classList.remove("submenu-active");
    }
}

document.addEventListener('click', closeSubmenu, false)
