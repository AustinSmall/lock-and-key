// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordlength
var specialcharacters
var numbers
var uppercase
var lowercase

var specialcharacters = ["!","@","#","$","%","^", "&", "*","-", "_", "-"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var passwordlength = [""]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

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
};
  passwordText.value = password;
 if (generatePassword) {
if (uppercase) password += random()
if (lowercase)
if (numbers)
if (specialcharacters)
 };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
