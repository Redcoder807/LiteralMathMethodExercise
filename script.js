let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love")
console.log(warmHugs);

beenImpaled = "Oh, look at that. I've been impaled.";
console.log(beenImpaled.slice(18));

dotDotDot = "...";
skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);

console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// bonus
console.log(" Let It Go!".toUpperCase().repeat(2).trim());

reindeers = ("Reindeers are better than people.");

console.log(reindeers.replace(/ /g, "_"));

console.log(Math.sqrt(2));

// Normal number 9
// let newRandomNumber = Math.random();
// newRandomNumber *= 17;
// newRandomNumber += 7;
// newRandomNumber = Math.floor(newRandomNumber)
// console.log(newRandomNumber);

// Extra Bonus One line

let newRandomNumber = Math.floor(Math.random() * 17 + 7)
console.log(newRandomNumber);