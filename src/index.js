import './less/index.less'

// Your code goes here!
const btn = document.querySelectorAll('.btn'); 
const letsGoP = document.querySelector('p'); 


//click 
document.addEventListener('click', e => {
    console.log(e)
    e.target.style.backgroundColor = 'pink'; 
}); 

//select 
letsGoP.addEventListener('select', event => {
    event.target.value.substring
})

//focus 





//blur 