
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword  () {

  var passwordlength = window.prompt ("Type in a number from 8 to 128 to decide password length.");
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Password must be between 8 to 128 characters")
  };
  
  var lowercase = window.prompt ("Would you like your password to contain lowercase letters?");
  if (lowercase == true) {
    password += lowercase
  };
  
  var uppercase = window.prompt ("Would you like your password to contain uppercase letters?");
  if (uppercase == true) {
    password  += uppercase
  };
  
  var numbers = window.prompt ("Would you like your password to contain numbers?");
  if (numbers == true) {
    password += numbers
  };
  
  var specialcharacters = window.prompt ("Would you like your password to have special characters?");
  if (specialcharacters == true) {
    password += specialcharacters
};
console.log (passwordlength, lowercase, uppercase, numbers, specialcharacters);
};


var functionArray = {

  getlowercase: function () {
return String.fromCharCode(math.foor(math.random()));
  },

  getuppercase: function () {
    return String.fromCharCode(math.floor(math.random()));
  },

  getNumbers: function() {
    return String.fromCharCode(math.floor(math.random()));

  },

  getspecialcharacters: function () {
    return String.fromCharCode(math.floor(math.random()))
  }


}
if (lowercase === true) {

}
if (uppercase === true) {

}


if (numbers === true) {

}

if (specialcharacters === true) {

}


// add to password//

randompassword 