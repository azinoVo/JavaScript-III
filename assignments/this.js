/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding ~ when in global scope, this will point to the whole window object
or forest.
* 2. Implicit Binding ~ occurs when using dot notation to invoke a function; whatever
is left of the dot is "this"
* 3. Explicit Binding ~ occurs when using the call(), apply(), and bind() methods;
"this" is passed with the method as an argument. 
* 4. New Binding ~ the object created and returned by a constructor function is the
target of the "this" keyword;
*
* write out a code example of each explanation above
*/

// Principle 1 - Windows Binding

function windowBind (num1,num2) {
    console.log(this);
    return num1 * num2 ; 
};

windowBind(1,4);


// Principle 2 - Implicit Binding

const fruitSalad = {
    fruit1:"apple",
    fruit2:"pineapple",
    topping:"honey",
    stir: function() {
        console.log("Stir " + this.topping + " and your favorite fruits together.");
    }
};

fruitSalad.stir();

// Principle 3 - Explicit Binding

const gamesPlayed = function(game1,game2,game3){
    console.log(`I am ${this.tisI} and I like to play ${game1}, ${game2}, 
    and ${game3}. `)
};

const me = {
    tisI: "Nguyen",
    tisDo: "play Games"
}

const games = ["Path of Exile","Shadowverse", "Epic Seven"];

gamesPlayed.apply(me,games);


// Principle 4 - New Binding

const orderInsects = function(order,name,flight) {
    this.order = order,
    this.name = name,
    this.flight = flight
} 

const Lepidoptera = new orderInsects ("Lepidoptera", "Butterflies/Moths", "Winged and Wingless Stage");
console.log(Lepidoptera);

// this is attached to the this = {} when invoked by the new keyword?