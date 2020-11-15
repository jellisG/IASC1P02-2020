var age = prompt("What is your age?");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Birth Year: "+birthYear);