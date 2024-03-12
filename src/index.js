import {pageload} from './pageLoad';
import {homeTab} from './home';
import menuTab from './menu';
import aboutTab from './about';
import './style.css';


function resetButtonStyle()
{
    document.querySelectorAll('.nav-btn').forEach((button)=>{
        button.classList='nav-btn';
    });
}

pageload();

const home=document.querySelector('#home-btn');
const menu= document.querySelector('#menu-btn');
const about= document.querySelector('#about-btn');


home.addEventListener('click',()=>{
document.querySelector('#main-content').textContent='';
homeTab();
resetButtonStyle();
home.classList.add('nav-btn2');
});

// shows up the home when the page loads afresh
home.click();


menu.addEventListener('click',()=>{
    document.querySelector('#main-content').textContent='';
    menuTab();
    resetButtonStyle();
    menu.classList.add('nav-btn2');
});

about.addEventListener('click',()=>{
    document.querySelector('#main-content').textContent='';
    aboutTab();
    resetButtonStyle();
    about.classList.add('nav-btn2');
});



/*
credits:

Photo by Lisa Fotios: https://www.pexels.com/photo/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330/

Photo by Gabriel Lima: https://www.pexels.com/photo/caprese-salad-in-a-serving-dish-15735986/

Photo by Anna Guerrero: https://www.pexels.com/photo/lasagna-on-white-ceramic-plate-4079520/

Photo by Nishant Patel: https://www.pexels.com/photo/tasty-spring-rolls-with-sauce-and-red-cocktail-in-restaurant-4105288/
*/