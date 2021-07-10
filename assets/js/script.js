// Assignment code here

// Strings containing the viable characters in each selectable charset
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// this fxn handles generating the password based on user input
function generatePassword(){
  var passwordOptions = "";

  // Querying the user for the types of chars they want in the password
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
    isNumeric = true;
  }

  var isSpecial;
  if(window.prompt("Include Special Characters? (Type Y/N)")=="Y") {
    isSpecial = true;
  }

  // Determining the total viable characters based on user input
  if (isLower) passwordOptions += lowerChars;
  if (isUpper) passwordOptions += upperChars;
  if (isNumeric) passwordOptions += numberChars;
  if (isSpecial) passwordOptions += specialChars;

  // Querying the user for desired password length and validating for correct input
  var passwordLength = window.prompt("How long should the password be? (8-128 characters)");
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number next time.");
    return;
  } else if (passwordLength<8 || passwordLength>128) {
    window.alert("Please enter a password with the correct length next time.");
    return;
  }

  // Generating the password based on user supplied length and character types
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }

  return password;
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