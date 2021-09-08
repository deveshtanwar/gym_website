// hamburger

let ul = document.querySelector('.resp');
let burger = document.querySelector('.burger');
let button = document.querySelector('.button');
let navlist = document.querySelector('.nav-list');

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-nav');
    button.classList.toggle('v-nav');
    navlist.classList.toggle('h-nav');
});

// image change on click

let press_01 = document.getElementById('first');
press_01.addEventListener('click', first_image);

function first_image(){
    document.getElementById('display').src = ("img/newpress01.jpg");
}

let press_02 = document.getElementById('second');
press_02.addEventListener('click', second_image);

function second_image(){
    document.getElementById('display').src = ("img/newpress02.jpg");
}

let press_03 = document.getElementById('third');
press_03.addEventListener('click', third_image);

function third_image(){
    document.getElementById('display').src = ("img/newpress03.jpg");
}

let press_04 = document.getElementById('fourth');
press_04.addEventListener('click', fourth_image);

function fourth_image(){
    document.getElementById('display').src = ("img/newpress04.jpg");
}

//change of text

let press_A = document.getElementById('first');
press_A.addEventListener('click', first_text);

function first_text(){
    document.getElementById('change').innerHTML = 'First Training Class';
}

let press_B = document.getElementById('second');
press_B.addEventListener('click', second_text);

function second_text(){
    document.getElementById('change').innerHTML = 'Second Training Class';
}

let press_C = document.getElementById('third');
press_C.addEventListener('click', third_text);

function third_text(){
    document.getElementById('change').innerHTML = 'Third Training Class';
}

let press_D = document.getElementById('fourth');
press_D.addEventListener('click', fourth_text);

function fourth_text(){
    document.getElementById('change').innerHTML = 'Fourth Training Class';
}