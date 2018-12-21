let username = 'Brian';
username ? console.log(`Hello, ${username}`) : console.log('Hello Jane');

let userQuestion = 'Can you answer my question';
console.log(`The user asked ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8); 
let eightBall = '';
switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;  
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
     case 4:
      eightBall = 'Dont count on it';
      break;
     case 5:
      eightBall = 'My sources say no';
      break;
     case 6:
      eightBall = 'Outlook not so good';
      break;
     case 7:
      eightBall = 'Signs point to yes';
      break; 
  }
  // randomNumber will generate a floor number between 0 and 8 that will set the value to log into the console

  console.log(eightBall);