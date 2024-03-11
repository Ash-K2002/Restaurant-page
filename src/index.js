import {pageload} from './pageLoad';
import {homeTab} from './home';
import menuTab from './menu';
import aboutTab from './about';
import './style.css';


console.log('hello restaurant');
console.log('hello again and again and again and again');

pageload();

const home=document.querySelector('#home-btn');
const menu= document.querySelector('#menu-btn');
const about= document.querySelector('#about-btn');


home.addEventListener('click',()=>{
document.querySelector('#main-content').textContent='';
homeTab();
});

// shows up the home when the page loads afresh
home.click();


menu.addEventListener('click',()=>{
    document.querySelector('#main-content').textContent='';
    menuTab();
});

about.addEventListener('click',()=>{
    document.querySelector('#main-content').textContent='';
    aboutTab();
});



/*
credits:

Photo by Lisa Fotios: https://www.pexels.com/photo/selective-focus-photography-of-pasta-with-tomato-and-basil-1279330/

Photo by Gabriel Lima: https://www.pexels.com/photo/caprese-salad-in-a-serving-dish-15735986/

Photo by Anna Guerrero: https://www.pexels.com/photo/lasagna-on-white-ceramic-plate-4079520/

Photo by Nishant Patel: https://www.pexels.com/photo/tasty-spring-rolls-with-sauce-and-red-cocktail-in-restaurant-4105288/
*/