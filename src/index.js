import './less/index.less'

// Your code goes here!

//click
const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log('hi')
    });
}); 

//const btn = document.querySelector('.btn')

//btn.addEventListener('click', e => {
   // e.target.style.backgroundColor = 'red'
//})


const btn = document.querySelectorAll('.btn'); 
btn.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.target.style.backgroundColor= 'yellow'
    });
}); 


//mouse over 
const logoHead = document.querySelector('.logo-heading'); 
const mousePurple = () => {
    logoHead.style.background = 'purple'; 
}; 
logoHead.addEventListener('mouseover', mousePurple); 

const mouseOut = () => {
    logoHead.style.backgroundColor = ''; 
}; 

logoHead.addEventListener('mouseout', mouseOut); 

//dbl click 

const nav = document.querySelector('.main-navigation'); 
nav.addEventListener('dblclick', function(e) {
    nav.classList.toggle('large'); 
}); 


//wheel 
function zoom(wheel) {
    wheel.preventDefault(); 

    scale += wheel.delay * -0.01; 

    scale = Math.min(Math.max(.125, scale), 4); 

    el.style.transform = `scale(${scale})`; 
}

let scale = 1; 
const el = document.querySelector('img'); 
el.onwheel = zoom; 