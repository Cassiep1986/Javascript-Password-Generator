// Assignment Code
var generateBtn = document.querySelector("#generate");

// Start series of prompts
function generatePassword(){
  var intro = window.confirm("To generate your password, please answers the following questions.");
  if (!intro) {
    return;  
  } else { choice1();
  }}

//Asks for length of password
  function choice1() {
    var charlength = window.prompt("1 of 5: How many characters do you want your password to be? (Note: Number must be between 8-128)");
    if (charlength < 8 || charlength > 128) {window.prompt("Please start over and select a number between 8-128");
  } else { choice2()  
  } }  

  function choice2() {
    var Uppercase = window.prompt("Would you like to use uppercase characters? (Use Y for yes and N for no");
    if (Uppercase === "Y" || Uppercase==="y" || Uppercase === "yes" || Uppercase || "YES" || "Yes") choice3();
  } else {
    return; 
  }}

  function choice3() {
    var Lowercase = window.prompt("Would you like to use lowercase characters? (Use Y for yes and N for no");
    if (Lowercase === "Y" || Lowercase==="y" || Lowercase === "yes" || Lowercase || "YES" || "Yes") choice4();
  }

  function choice4() {
    var Numbers = window.prompt("Would you like to use number characters? (Use Y for yes and N for no");
    if (Numbers === "Y" || Numbers==="y" || Numbers === "yes" || Numbers || "YES" || "Yes") choice5(); 
  }

  function choice5() {
    var Special = window.prompt("Would you like to use special characters? (Use Y for yes and N for no");
    if (Special === "Y" || Special==="y" || Special === "yes" || Special || "YES" || "Yes") finishedPassword(); 
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
