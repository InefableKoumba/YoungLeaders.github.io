// Nabigation toggle button

const navToggleBtn = document.querySelector('.navbar__toggle-btn')
const mobileNavaBar = document.querySelector('.mobile-navbar')
const toggle_btn = document.querySelector('#toggle_btn')

navToggleBtn.addEventListener('click', (e)=>{
    if (screen.width < 1075) mobileNavaBar.classList.toggle('show')
    
})
document.addEventListener("scroll",(e)=>{
    if (screen.width < 1075) mobileNavaBar.classList.remove('show')
})
document.addEventListener("click",(e)=>{
    // if ((screen.width < 1075) && e.target in ) mobileNavaBar.classList.remove('show')
    if (screen.width < 1075 ){
        if(e.target != toggle_btn) mobileNavaBar.classList.remove('show')
        
    }
})