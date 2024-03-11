import { addContent } from "./pageLoad";
import content from "./contents";

function aboutTab()
{
const mainContent= document.querySelector('#main-content');
const aboutContent= content.aboutContent;
mainContent.appendChild(addContent('About Us','h2'));

function addField(title, content)
{
const field= document.createElement('div');
field.className='about-field';
field.appendChild(addContent(title,'h3'));
field.appendChild(addContent(content,'p'));
return field;
}

for(let item of aboutContent)
{
mainContent.appendChild(addField(item.title, item.content));
}

}

export default aboutTab;