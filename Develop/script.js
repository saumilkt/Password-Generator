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

  if (isLower) passwordOptions += lowerChars;
  if (isUpper) passwordOptions += upperChars;
  if (isNumeric) passwordOptions += numberChars;
  if (isSpecial) passwordOptions += specialChars;

  var passwordLength = window.prompt("How long should the password be? (8-128 characters)");
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number next time.");
    return;
  } else if (passwordLength<8 || passwordLength>128) {
    window.alert("Please enter a password with the correct length next time.");
    return;
  }
  var password = "";
  for (var i = 0; i < passwordOptions.length; i++) {
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
