# Password-generator

For this assignment I was tasked with the goal to make this password generator work.  Given the HTLM and CSS UI, and partial Javascript, I was to make the "generatePassword" function.

To do so I created multople arrays noting each character type: uppercase, lowercase, number and symbol.  I then also created a blank array that would get filled with the arrays selected by the user when prompted.  (I labeled "result")
I also created a blank variable that would be the generated password.

I then had the function prompt the user for number of characters, and which character types they would want.  Upon their selection the appropriate arrays would be added to the blank array.

I then created a loop that would go for as many times as the user selected in "length" where it would randomly pull from the "result array".

Then the randomly generated password will appear in the text area.

