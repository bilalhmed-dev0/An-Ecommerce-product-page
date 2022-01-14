const menu_Btn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav_links');


menu_Btn.addEventListener('click', () => {
    menu_Btn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
   
    
});
