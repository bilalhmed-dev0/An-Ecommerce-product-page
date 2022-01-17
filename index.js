const menu_Btn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav_links');
const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const images = document.querySelector('.images');



menu_Btn.addEventListener('click', () => {
    menu_Btn.classList.toggle('active');
    navLinks.classList.toggle('active');
    
   
    
});

let arr = ["images/image-product-1.jpg" , "images/image-product-2.jpg" , "images/image-product-3.jpg" , "images/image-product-4.jpg"];
let counter = 0;

nextBtn.addEventListener('click' ,() =>{
    counter++;
    if(counter > arr.length -1){
        counter=0;
    }
    images.src = arr[counter];
});


previousBtn.addEventListener('click' ,() =>{
    counter--;
    if(counter < 0){
        counter = arr.length-1;
    }
    images.src = arr[counter];
})
