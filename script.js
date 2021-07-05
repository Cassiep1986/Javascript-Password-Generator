// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";
var uppercase = "QWERTYUIOPASDFHGHJKLZXCVBNM";
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var numbers = "0123456789";
var special = "!@#$%^&*?";
var charUsed = 0;
var charlength;

// Start series of prompts
function generatePassword() {
  var intro = window.confirm(
    "To generate your password, please answers the following questions."
  );
  if (!intro) {
    return;
  } else {
    choice1();
  }
}

//Asks for length of password
function choice1() {
  charlength = window.prompt(
    "1 of 5: How many characters do you want your password to be? (Note: Number must be between 8-128)"
  );
  if (charlength < 8 || charlength > 128) {
    window.prompt("Please start over and select a number between 8-128");
  } else {
    choice2();
  }
}

function choice2() {
  var confirmUpper = window.confirm("Click ok to use uppercase characters");
  if (confirmUpper) {
    var add1 = Math.random() * Math.floor(uppercase.length);
    passwordResult = passwordResult + uppercase.charAt(add1);
    charUsed++;
    console.log(passwordResult);
  }
  choice3();

  }

function choice3() {
  var confirmLower = window.confirm("Click ok to use lowercase characters");
  if (confirmLower) {
    var add2 = (Math.floor(Math.random()* Math.floor(lowercase.length)));
    passwordResult = passwordResult + lowercase.charAt(add2);
    charUsed++;
    console.log(passwordResult);
  }
  choice4();

}

function choice4() {
  var confirmNumbers = window.confirm("Click ok to use number characters");
  if (confirmNumbers) {
    var add3 = (Math.floor(Math.random()* Math.floor(numbers.length)));
    passwordResult = passwordResult + numbers.charAt(add3);
    charUsed++;
    console.log(passwordResult);
  }
  choice5();
}

function choice5() {
  var confirmSpecial = window.confirm("Click ok to use special characters");
  if (confirmSpecial) {
    var add4 = (Math.floor(Math.random()* Math.floor(special.length)));
    passwordResult = passwordResult + special.charAt(add4);
    charUsed++;
  }
  
  for (let i = charUsed; i < charlength; i++) {
    switch (Math.floor(Math.random() * 4)) {
      case 0:
        add4 = Math.random() * Math.floor(uppercase.length);
        passwordResult = passwordResult + uppercase.charAt(add4);
        break;
        case 1:
          add4 = (Math.floor(Math.random()* Math.floor(lowercase.length)));
          passwordResult = passwordResult + lowercase.charAt(add4)
          break;
          case 2:
            add4 = (Math.floor(Math.random()* Math.floor(numbers.length)));
            passwordResult = passwordResult + numbers.charAt(add4);
            break;
            default:
              add4 = (Math.floor(Math.random()* Math.floor(special.length)));
              passwordResult = passwordResult + special.charAt(add4);
            }
            
          }
          console.log(passwordResult);
          
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordResult;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
