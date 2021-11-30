import './less/index.less'

// Your code goes here!

//click
const divs = document.querySelectorAll('div')

divs.forEach(div => {
    div.addEventListener('click', () => {
        console.log('hi')
    })
})

//const btn = document.querySelector('.btn')

//btn.addEventListener('click', e => {
   // e.target.style.backgroundColor = 'red'
//})


const btn = document.querySelectorAll('.btn'); 
btn.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.target.style.backgroundColor= 'yellow'
    })
})


//mouse over 
const logoHead = document.querySelector('.logo-heading'); 
const mousePurple = () => {
    logoHead.style.background = 'purple'; 
}
logoHead.addEventListener('mouseover', mousePurple)

const mouseOut = () => {
    logoHead.style.backgroundColor = ''; 
}
logoHead.addEventListener('mouseout', mouseOut); 






/*
 
const subtitle = document.querySelector('.into h2'); 
const letsGoP = document.querySelector('p'); 


//select 
letsGoP.addEventListener('select', event => {
    event.target.value.substring
})

//keydown
function subtitlePurp(e) {
    if (e.key === 'Enter') {
        subtitle.style.color = '#9932CC'; 
    }
}
document.addEventListener('keydown', subtitlePurp); 
*/