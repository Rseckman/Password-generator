// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  

function generatePassword() {
  var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var num = [0,1,2,3,4,5,6,7,8,9,];
  var symbol = ["!","@","#","$","%","^","&","*","-","_","=","+"];
  var result = [];
  var generatedPw = "";

  var length = prompt("How many characters would you like your password to be?"); 
  while (length < 8 || length > 128){
    length = prompt("You must choose a number between 8 and 128 characters");
  }
  if (confirm ("Do you wants capital letters in your password?")){
    result = result.concat(caps);
  }
  if (confirm("Do you wants lower case letters in your password?")){
    result = result.concat(lower);
  }
  if (confirm("Do you wants numbers in your password?")){
    result = result.concat(num);
  }
  if (confirm("Do you wants symbols in your password?")){
    result = result.concat(symbol);
  }
  
  for (var i = 0; i < length; i++){
    generatedPw += result [Math.floor(Math.random() * result.length)];
  
  }
  return generatedPw;
}
  


