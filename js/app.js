'use strict';
alert('Johnny Five is Alive.');
/// global counter
var totalScore = 0;
// user prompt to personalize site to user //

var userName = prompt('Hello my name is Judah, what is your name?');
alert('Hello ' + userName + '. here is a question game to get to know me better.');


// start of prompts with 5 questions Y/N about myself //
function mehColor() {
  var myOrange = prompt('Do you think i like the color orange? Please reply with YES or NO').toUpperCase();

  if (myOrange === 'YES' || myOrange === 'Y'){
    alert('I don\'t dislike orange.');
    totalScore++;
  } else{
    alert('Meh I could go either');
    console.log('The user entered ' + myOrange + ' for quetion 1');}
}
function brotherSister() {
  var mySiblings = prompt('Do you think i have siblings? YES or No').toUpperCase();
  if (mySiblings === 'YES' || 'Y'){
    alert('YES I have a brother and a sister.');
    totalScore++;
  } else{
    alert('Sometimes I wish i was an only child!!');
  }
  console.log('the user entered ' + mySiblings + '. For #2 if i had siblings.');
}

function worldTour() {
  var countriesVisited = prompt('Do you think I\'ve been to over 10 countries? yes or no').toLowerCase();
  if (countriesVisited === 'yes' || countriesVisited === 'y'){
    alert('Yep I\'ve been to 17 different countries thanks to uncle Sam');
    totalScore++;
  } else{
    alert('Actually I\'ve been to 17 countries');
  }
  console.log('the user entered ' + countriesVisited + '. For question 3');
}

function bestFruit() {
  var favoriteFruit = prompt('Do you think I like pineapple? y or n').toLowerCase();
  if (favoriteFruit === 'yes' || favoriteFruit === 'y'){
    alert('I Love pineapple!!');
    totalScore++;
  } else{
    alert('Pineapple is my favorite fruit!');
  }
  console.log('the user entered ' + favoriteFruit + '. On question 4');
}

function worstColor() {
  var theColorYellow = prompt('Do you think i like, the color yellow? y or n').toUpperCase();
  if (theColorYellow === 'YES' || theColorYellow === 'Y'){
    alert('Eww.');
  } else {
    alert('You are correct.');
    totalScore++;
  }
  console.log(theColorYellow + ' was answered for question 5');
}
// my age prompt guessing game //
function numberYears() {
  var counter = 0;
  var flag = false;
  var myAge = 32;
  do{
    var guessMyAge = parseInt(prompt('Can you guess my age in 4 tries?'));
    counter++;
    console.log('user guessed ' + guessMyAge + ' for my age');
    if(guessMyAge === myAge){
      flag = true;
      alert('That\'s my age!!');
      totalScore++;
    } else if(guessMyAge < 32){
      alert('I am older');
    } else{
      alert('nope i\'m not that old yet');
    }
  } while(flag === false && counter < 4);
}

// states visted guessing game with array //
function roadTrip() {
  var j = false;
  var attempts = 0;
  var statesGuessed;
  var statesVisted = ['oregon', 'california', 'idaho', 'montana', 'alaska', 'hawaii', 'wyoming', 'colorado', 'arizona', 'new mexico'];
  for (attempts = 0; attempts < 6; attempts++){
    statesGuessed = prompt('can you guess one of the states i\'ve benn to? you have 6 tires').toLocaleLowerCase();

    for (var i = 0; i < statesVisted.length; i++){
      if (statesGuessed === statesVisted[i]){
        alert('you are correct i\'ve been there i\'ve been to ' + statesVisted);
        j = true;
        attempts === 7;
        break;
      }
    }
    if (j === true){
      totalScore++;
      break;
    } else{
      alert('I have not been there yet');
    }
  }if (attempts === 6){
    alert('looks like you didn\'t get one but here are the states i\'ve been to' + statesVisted);
  }
}

mehColor();
brotherSister();
worldTour();
bestFruit();
worstColor();
numberYears();
roadTrip();
alert('good job playing ' + userName + ' you got ' + totalScore + ' out of 7');