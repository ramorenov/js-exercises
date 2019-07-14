/* Password Validation
   This program should check if each passwords in the array ("password[]") 
   contains valid Password (see below for password criterias) and return 
   new array ("PasswordValidationResult[]") with True/False booleans.

LEVEL 1: 

Passwords must 
- Have at least 5 characters, 
- Have English uppercase letters (A-Z),
- Have English lowercase letters (a-z),
- Have numbers (0-9).

Expected Result:
PasswordValidationResult= [false, false, frue, true, true]

LEVEL 2:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Expected Result:
PasswordValidationResult= [false, false, false, true, true]

LEVEL 3:

Passwords must 
- Have at least 5 characters.
- Have English uppercase letters (A-Z)
- Have English lowercase letters (a-z)
- Have numbers (0-9)
- Have non-alphanumeric symbols ("!", "#", "$", "%", ".")

Passwords must not be any previous password in previousPassword Array. 
PreviousPassword = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyY!5", "qwbfj76%", "tytT3729."];

Expected Result:
PasswordValidationResult=  [false, false, false, false, true]

*/

var er1 = /[0-9]/;
var er2 = /[a-z]/;
var er3 = /[A-Z]/;
var er4 = /[!/#/$/%/.]/;

var password = ["Se%5", "TktE.TJTU", "384HsHF", "dvyyeyY!5", "tryT3729."];

PasswordValidationResultL1 = password.map(
  item => er1.test(item) && er2.test(item) && er3.test(item) && item.length > 5
);

PasswordValidationResultL2 = password.map(
  item =>
    er1.test(item) &&
    er2.test(item) &&
    er3.test(item) &&
    er4.test(item) &&
    item.length > 5
);

PreviousPassword = [
  "fhD8!yrjj",
  "ttkTu.wer3",
  "dvyyeyY!5",
  "qwbfj76%",
  "tytT3729."
];

PasswordValidationResultL3 = password.map(
  item =>
    !PreviousPassword.includes(item) &&
    er1.test(item) &&
    er2.test(item) &&
    er3.test(item) &&
    er4.test(item) &&
    item.length > 5
);

console.log("LEVEL 1: " + PasswordValidationResultL1);
console.log("LEVEL 2: " + PasswordValidationResultL2);
console.log("LEVEL 3: " + PasswordValidationResultL3);
