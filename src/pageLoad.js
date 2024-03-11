
function addContent(content,type){
const element = document.createElement(type);
element.textContent= content;
return element;
}


function createNav()
{
const nav= document.querySelector('nav');
const arr=['Home','Menu','About'];
for(let item of arr)
{
const element= addContent(item,'Button');
element.id=`${item.toLowerCase()}-btn`;
element.className='nav-btn';
nav.appendChild(element);
}
}

function pageload(){
    const header= document.querySelector('header');
    const head1=addContent('My Awesome Restaurant','h1');
    header.insertAdjacentElement('afterbegin',head1);
    createNav();
}

export {pageload,addContent};