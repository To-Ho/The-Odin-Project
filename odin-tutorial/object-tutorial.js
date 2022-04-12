//----------------Object-----------------------
//Basic
let user = { //object
    name: "John", //name: property/name, "john": method/value
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };
//access "like birds"
user["like birds"];
//access by variable
let key = "year";
user[key] = 2001;
alert(user[key]);
//computed properties
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
    [fruit]: 5, //hanging command, recommended for eaiser add/remove/move
};
alert(bag.apple); //5 if fruit = "apple"
//Object ordered: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.
//Put + before integer to avoid integer sort: "+49" instead of "49"

//---------javascript.info exercises---------
//Hello, object
//create an empty object user
let user = {};
//Add the property name with the value John
user.name = "John";
//Add the property surname with the value Smith
user.name = "Smith";
//Change the value of the name to Pete
user.name = "Pete";
//Remove the property name from the object
delete user.name;

//Check for emptiness
//Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise
function isEmpty(obj) {
    //obj.key === undefined to test if the property exist
    for (let key in obj) {
        //if the loop run, then there is key in obj
        return false;
    }
    return true;
}

//Sum object properties
let salariesSum = 0;
for (let employee in salaries) { //access each key
    //access each salaries[empoyee]
    salariesSum += salaries[employee];
}
alert(salariesSum);

//Multiply numeric property values by 2
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
function multiplyNumeric(obj) {
    //access each key in obj
    for (let key in obj) {
        //check for number first
        if(typeof(obj[key] === "number")) {
            //multiply obj.key
            obj[key] *= 2;
        }
    }
}


