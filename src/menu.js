import { addContent } from "./pageLoad";
import content from "./contents";

function addMenuCards(category, items)
{   const menuCard= document.createElement('div');
    menuCard.className='menu-card';
    menuCard.appendChild(addContent(category,'h3'));
    function addmenuItems(name, description, price)
    {
        const item= document.createElement('div');
        item.appendChild(addContent(name,'h4'));
        item.appendChild(addContent(description,'p'));
        item.appendChild(addContent('price: '+price,'div'));
        item.className='menu-card-item';

        return item;
    }

    for(let item of items)
    {
        menuCard.appendChild(addmenuItems(item.name,item.description,item.price));
    }
    return menuCard;

}

function menuTab()
{
const mainContent= document.querySelector('#main-content');

const menuHead= addContent('Menu', 'h2');
menuHead.className='menu-head';
mainContent.appendChild(menuHead);
const menu = content.menu;
for(let item of menu)
{
   mainContent.appendChild(addMenuCards(item.category, item.items));

}


}

export default menuTab;