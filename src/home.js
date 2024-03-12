import { addContent } from "./pageLoad";
import content from './contents';

function genFoodCards(name, description,image){
const card=document.createElement('div');
card.className='special-food';
card.appendChild(addContent(name,'h3'));
card.appendChild(addContent(description,'p'));
card.appendChild(image);
return card;
}

function homeTab()
{
const mainContent= document.querySelector('#main-content');

//showing a welcome message with a title
const welcome= document.createElement('div');
welcome.className='welcome-home';
welcome.appendChild(addContent(content.welcomeTitle,'h2'));
mainContent.appendChild(welcome);
let element = addContent(content.welcomeContent,'p');
welcome.appendChild(element);

const food= document.createElement('div');
const foodDeck=document.createElement('div');

food.appendChild(addContent('Our Specialities:','h2'));
food.appendChild(foodDeck);
food.className='specialities-home';
const list= content.specialities;
for(let item of list)
{   
    foodDeck.appendChild(genFoodCards(item.name, item.description,item.image));
}
mainContent.appendChild(food);

}

export {homeTab};