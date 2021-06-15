// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = [];
var uppercase = "QWERTYUIOPASDFHGHJKLZXCVBNM"
var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "0123456789"
var Special ="!@#$%^&*?"
// Start series of prompts
function generatePassword(){
  var intro = window.confirm("To generate your password, please answers the following questions.");
  if (!intro) {
    return;  
} else { 
  choice1();
  }}
  
  //Asks for length of password
  function choice1() {
    var charlength = window.prompt("1 of 5: How many characters do you want your password to be? (Note: Number must be between 8-128)");
    if (charlength < 8 || charlength > 128) {window.prompt("Please start over and select a number between 8-128")
    var CLinput = (value.charlength);
  } else { choice2();  
  } }  
  
  function choice2() {
    var confirmUpper = window.confirm("Click ok to use uppercase characters");
    if (confirmUpper) {
      var add1 = (Math.floor(Math.random()* Math.floor(uppercase.length)));
      passwordResult.push(add1)
      console.log(passwordResult);
    }
    
    choice3();
  }

  function choice3() {
    var confirmLower = window.confirm("Click ok to use lowercase characters");
    choice4();

  }

  function choice4() {
    var confirmNumbers = window.confirm("Click ok to use number characters")
    choice5(); 
  }

  function choice5() {
    var confirmSpecial = window.confirm("Click ok to use special characters");


  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
