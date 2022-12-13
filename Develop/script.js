function generatePassword() {

var minlength = 8;
var maxlength = 128;
var pword = "";

var length = prompt("Enter Pasword length(minimum " + minlength + ",maximum" + maxlength +"):");

if (length < minlength || length > maxlength) {
  alert("Invalid Password length.  Please try again")
}

var characterset = "";

var includeLowercase = confirm("Include lowercase characters?");
if (includeLowercase) {
  characterset += "abcdefghijklmnopqrstuvwxyz";
}

var includeUppercase = confirm("Include Uppercase characters?");
if (includeUppercase) {
  characterset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

var includenumber = confirm("Include Numeric Character?");
if (includenumber) {
  characterset += "0123456789";
}

var includeSpecial = confirm("Include Special Character?")
if (includeSpecial) {
  characterset += "!@#$%^&*()?";
}

if (characterset === "") {
  alert("At least one character type must be selected")
}

for (var i = 0; i < length; i++) {
  pword += characterset.charAt(Math.floor(Math.random() * characterset.length))
}

return pword
}




// Assignment code here


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
