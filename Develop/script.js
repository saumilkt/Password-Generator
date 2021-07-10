// Assignment code here
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

function generatePassword(){
  var passwordOptions = "";

  var isLower;
  if(window.prompt("Include Lowercase Characters? (Type Y/N)")=="Y") {
    isLower = true;
  }
  var isUpper;
  if(window.prompt("Include Uppercase Characters? (Type Y/N)")=="Y") {
    isUpper = true;
  }

  var isNumeric;
  if(window.prompt("Include Numbers? (Type Y/N)")=="Y") {
    isChars = true;
  }

  var isSpecial;
  if(window.prompt("Include Special Characters? (Type Y/N)")=="Y") {
    isChars = true;
  }

  if(isLower) passwordOptions += lowerChars;
  if(isUpper) passwordOptions += upperChars;
  if(isNumeric) passwordOptions += numberChars;
  if(isSpecial) passwordOptions += specialChars;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
