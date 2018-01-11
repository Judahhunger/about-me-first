'use strict';
alert('help is there anybody out there? Just nod if you can hear me.');
// user prompt to personalize site to user //
var userName = prompt('Hello my name is Judah, what is your name?');
alert('Hello ' + userName + '. here is a question game to get to know me better.');

// start of prompts with 5 questions Y/N about myself //
var myOrange = prompt('Do you think i like the color orange? Please reply with YES or NO').toUpperCase();
if (myOrange === 'YES' || myOrange === 'Y'){
  alert('I don\'t dislike orange.');
} else{
  alert('Meh I could go either');
}
console.log('The user entered ' + myOrange + ' for quetion 1');

var mySiblings = prompt('Do you think i have siblings? YES or No').toUpperCase();
if (mySiblings === 'YES'){
  alert('YES I have a brother and a sister.');
} else{
  alert('Sometimes I wish i was an only child!!');
}
console.log('the user entered ' + mySiblings + '. For #2 if i had siblings.');

var countriesVisited = prompt('Do you think I\'ve been to over 10 countries? yes or no').toLowerCase();
if (countriesVisited === 'yes' || countriesVisited === 'y'){
  alert('Yep I\'ve been to 17 different countries thanks to uncle Sam');
} else{
  alert('Actually I\'ve been to 17 countries');
}
console.log('the user entered ' + countriesVisited + '. For question 3');

var favoriteFruit = prompt('Do you think I like pineapple? y or n').toLowerCase();
if (favoriteFruit === 'yes' || favoriteFruit === 'y'){
  alert('I Love pineapple!!');
} else{
  alert('Pineapple is my favorite fruit!');
}
console.log('the user entered ' + favoriteFruit + '. On question 4');

var theColorPurple = prompt('Do you think i like, the color purple?').toUpperCase();
if (theColorPurple === 'YES' || 'Y'){
  alert('Yes I liked the book and i like the color.');
} else {
  alert('The book or the color I like them both.');
}
console.log(theColorPurple + ' was answered for question 5');

var myAge = parseInt(prompt('How old do you think i am?'));
if(myAge === 32){
  alert('That\'s my age!!');
} else if(myAge < 32){
  alert('I am older');
} else{
  alert('nope i\'m not that old yet');
}
alert('Thanks answering ' + userName + '.');
console.log(myAge + ' is how old the user thinks i am');
// End of prompt questions //
