<!doctype HTML>
function open(){
alert("This is an alert text");
var Name= prompt("What is your name?");
document.write("Hello, "+Name+"\n");
}
function getAge(){
var Age = prompt("How old are you?");
if(Age<10){
document.write("I see that you are under 10 years old\n");
}
else if(Age<18){
document.write("I see that you are under 18 years old\n");
}
else{
document.write("I see that you are "+Age+" years old\n");
}
}
open();
getAge();

var Correct = document.getElementById("Answer");
if(Correct==5){
alert("Your answer is correct"<br>);
}
else{
alert("Your answer is wrong"<br>);
}