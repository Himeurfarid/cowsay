const cowsay = require('./information.js');
const cow = require('cowsay')


console.log (cow.say( { 
    text :"Hello i'm" + " " +cowsay.name + " " +"from" +" "+ cowsay.city + " " + "campus"  ,
    e : "oO",
    T : "U "
}));


