const container = document.querySelector('#container'); //select id 'container'

const content = document.createElement('div'); //create a new div and store it in the variable 'content'
content.classList.add('content'); //add class 'content' to div
content.style.color = 'brown';
content.textContent = 'This is the text-content!'; //create text node containing 'This is...'

container.appendChild(content); //create child 'content' for parent 'container'

//<p> with red text 'Hey I'm red!'
const paragraph = document.createElement('p');
paragraph.classList.toggle('paragraph');
paragraph.style.color = 'red'; //Set color
paragraph.textContent = 'Hey I\'m red!';

container.appendChild(paragraph); //append paragraph as the LAST child of container

//<h3> with blue text 'I'm a blue h3'
const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.style.color = 'blue';
header3.textContent = 'I\'m a blue h3!';
container.insertBefore(header3, content); //insert h3 before content

//another div
const anotherDiv = document.createElement('div');
//no need for class
anotherDiv.style.cssText = 'border: 3px solid black; background-color: pink';

//nested h1
const anotherH1 = document.createElement('h1');
anotherH1.textContent = 'I\'m in a div';
anotherDiv.appendChild(anotherH1);
//nested p
const anotherP = document.createElement('p');
anotherP.textContent = 'ME TOO!';
anotherDiv.appendChild(anotherP);

container.appendChild(anotherDiv);