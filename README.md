# Guess the number
This program is a **simple** game were a user well guess the number that the program has picked with ten guesses.
The program first creates a const that will store the random number using the `Math.random()` function. there is then `let` for the turns so we can count what a turn a user is on and also the users guesses which is stored with a query selector (`document.querySelector("input").value`).

## Screenshot 
![screenshot_20180905_214046](https://user-images.githubusercontent.com/33196546/45120343-b9a90b00-b155-11e8-8b08-6eca5a7fcb30.png)

### Function
the rest of the logic is stored in a function called `guessNumber()`. The function goes through various **if** statements that check first if what is inputed is a `number` and then will go through the logic if the number is first **correct** then if it is not it will check if `(turn < 10)` and add `P` on the html side which will let the user know if they are wrong and if the number they guessed is too high or too low. There is then an `else` statement that will tell the user they have run out of turns and also tell the user what the number that was stored was.
