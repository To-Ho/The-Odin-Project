//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics#object_basics_1
const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  
  // Put your code here
  
  const catName = cat['name'];
  cat.greeting();
  cat['color'] = 'black';

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics#object_basics_2
// Put your code here
//Using object literal
const band = {
name: 'Samurai',
nationality: 'NUSA',
genre: 'Rock',
members: 5,
formed: 2003,
split: 2008,
albums: [
  {
    name: 'Blistering Love',
    released: 2003,
  },
  {
    name: `Chippin' In`,
    released: 2020,
  }
],
}

let bandInfo = `The band ${band.name} originated in ${band.formed} from ${band.nationality}, they played ${band.genre} music.
  Their first album was ${band.albums[0].name} released in ${band.albums[0].released} with huge success. 
  ${band.name} splited in ${band.split}. However, they came back for the second album, ${band.albums[1].name}, in ${band.albums[1].released}.`;

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics#object_basics_3
const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

const cat2 = {
  name : 'Oreo',
  breed : 'English',
  color : 'Cream Brown',
  greeting: function() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  }
}

cat.greeting();
cat2.greeting();

//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics#object_basics_4
/*const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat2 = {
  name : 'Elfie',
  breed : 'Aphrodite Giant',
  color : 'ginger',
  greeting: function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}
*/
//use constructors
function Cat(name, breed, color) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.greeting = function() {
    console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
  }
}

const cat = new Cat('Bertie', 'Cymric', 'white');
const cat2 = new Cat('Elfie', 'Aphrodite Giant', 'ginger');
cat.greeting();
cat2.greeting();