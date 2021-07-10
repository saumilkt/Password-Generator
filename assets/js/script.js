// Assignment code here

// Strings containing the viable characters in each selectable charset
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// this fxn handles generating the password based on user input
function generatePassword(){
  var passwordOptions = "";

  // Querying the user for the types of chars they want in the password and validating that there response is correct
  var isLower = validateInput(window.prompt("Include Lowercase Characters? (Type Y/N)"));
  var isUpper = validateInput(window.prompt("Include Uppercase Characters? (Type Y/N)"));
  var isNumeric = validateInput(window.prompt("Include Numbers? (Type Y/N)"));
  var isSpecial = validateInput(window.prompt("Include Special Characters? (Type Y/N)"));

  // Determining the total viable characters based on user input
  if (isLower) passwordOptions += lowerChars;
  if (isUpper) passwordOptions += upperChars;
  if (isNumeric) passwordOptions += numberChars;
  if (isSpecial) passwordOptions += specialChars;

  // Validating that the user has selected at least 1 charset
  if (passwordOptions.length == 0) {
    window.alert("Please select at least 1 type of character next time.");
    location.reload();
    // stops page from querying the user while reloading the page
    return;
  }

  // Querying the user for desired password length and validating for correct input
  var passwordLength = window.prompt("How long should the password be? (8-128 characters)");
  if (isNaN(passwordLength)) {
    window.alert("Please enter a number next time.");
    location.reload();
  } else if (passwordLength<8 || passwordLength>128) {
    window.alert("Please enter a password with the correct length next time.");
    location.reload();
  }

  // Generating the password based on user supplied length and character types
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
  }

  return password;
}

// Checks whether the input is Yes, No, or in error
function validateInput(response) {
  if (response == "Y" || response == "y") {
    return true;
  } else if (response == "N" || response == "n") {
    return false;
  } else {
    window.alert("Please type either 'Y' or 'N' next time");
    location.reload();
  }
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
