"use strict"

const firstName = "Lukas"; // variables have no type in JavaScript
let lastName = "Stehr";

firstName = "Lukas the Magnificent"; // ERROR - you can not change your first name
lastName = "Anslinger-Stehr"; // OKAY - if you marry, you can change your last name

const children = []; // creates an empty array

children.push("Lukas junior"); // OKAY - you can modify the contents of constant variables
children = []; // ERROR - you cannot get rid of your children