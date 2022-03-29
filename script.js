// Case Converter
const popupCase = document.getElementById('popupCaseConverter');
const popToggleCase = document.getElementsByClassName('open-window')[0];
const popCloseCase = document.getElementsByClassName('button')[0];

// FlashCards
const popupFlash = document.getElementById('popupFlashCards');
const popToggleFlash = document.getElementsByClassName('open-window')[1];
const popCloseFlash = document.getElementsByClassName('button')[1];

// Piano
const popupPiano = document.getElementById('popupPiano');
const popTogglePiano = document.getElementsByClassName('open-window')[2];
const popClosePiano = document.getElementsByClassName('button')[2];

// To Do List
const popupToDoList = document.getElementById('popupToDoList');
const popToggleToDoList = document.getElementsByClassName('open-window')[3];
const popCloseToDoList = document.getElementsByClassName('button')[3];

// function Case Converter
popToggleCase.onclick = function (){
    popupCase.style.display="block";
};
popCloseCase.onclick = function (){
    popupCase.style.display="none";
};

// function FlashCards
popToggleFlash.onclick = function (){
    popupFlash.style.display="block";
};
popCloseFlash.onclick = function (){
    popupFlash.style.display="none";
};

// function Piano
popTogglePiano.onclick = function (){
    popupPiano.style.display="block";
};
popClosePiano.onclick = function (){
    popupPiano.style.display="none";
};

// function To Do List
popToggleToDoList.onclick = function (){
    popupToDoList.style.display="block";
};
popCloseToDoList.onclick = function (){
    popupToDoList.style.display="none";
};



//Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}