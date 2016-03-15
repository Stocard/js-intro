"use strict"

const speakerOne = {
	firstName: "Lukas",
	lastName: "Stehr"
};

console.log(speakerOne.firstName); // Lukas
console.log(speakerOne.company); // null

speakerOne.company = "Stocard";

console.log(speakerOne.company); // Stocard
console.log(speakerOne); // prints the full object

const speakers = [speakerOne];

console.log(speakers); // prints the full array
console.log(speakers.length); // 1
console.log(speakers[0]); // prints the object for Lukas

const speakerTwo = {
	firstName: "Florian",
	lastName: "Barth"
};
speakers.push(speakerTwo);

console.log(speakers.length); // 2
console.log(speakers[1]); // prints the object for Flo

speakers[1].company = "Stocard";

console.log(speakers[1].company); // Stocard