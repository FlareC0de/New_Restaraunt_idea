const menuBtn = document.querySelector(".menu-btn");
let theMenu = document.querySelector(".link-holder");

menuBtn.addEventListener('click', () =>{
    if(theMenu.style.top == '100%') {
        theMenu.style.top = '0%'
    } else {
        theMenu.style.top = '100%'
    }
})