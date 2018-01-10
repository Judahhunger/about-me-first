'use strict';
alert('help is there anybody out there? Just nod if you can hear me.');

var myOrange = prompt('Do you think i like the color orange? Please reply with YES or NO').toUpperCase();
    if (myOrange === 'YES' || myOrange === 'Y'){
        alert('I don\'t dislike orange.');
    } else{
        alert('Meh I could go either');
    }
 console.log('The user entered ' + myOrange + ' for quetion 1');

var mySiblings = prompt('Do you think i have siblings? YES or No').toUpperCase();
    if (mySiblings ==='YES'){
        alert('YES I have a brother and a sister.');
    } else{
        alert('Sometimes I wish i was an only child!!');
    }
console.log('the user entered ' + mySiblings + '. For question 2.');

var countriesVisited = prompt('Do you think I\'ve been to over 10 countries? yes or no').toLowerCase();
    if (countriesVisited === 'yes'|| countriesVisited === "y"){
        alert('Yep I\'ve been to 17 different countries thanks to uncle Sam');
    } else{
        alert('Actually I\'ve been to 17 countries');
    }
console.log('the user entered' + countriesVisited + '. For question 3');

var favoriteFruit = prompt('Do you think I like pineapple? y or n').toLowerCase();
    if (favoriteFruit === 'yes' || favoriteFruit === 'y'){
        alert('I Love pineapple!!')
    } else{
        alert('Pineapple is my favorite fruit!')
    }
console.log('the user entered' + favoriteFruit + '. On question 4');

// var theColorPurple = prompt('Do you think i like, the color purple?')

// var myAge = parseInt(prompt('How old do you think i am?'));
//     if(myAge === 32){
//         alert('That\'s my age!!');
//     } else if(myAge < 32){
//         alert('I am older')
//     } else{
//         alert('nope i\'m not that old yet')
//     }
