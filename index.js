// Create variables to store local variables grabbed
var rlname;
var rlage;
var rlcolor;

// Create reading interface
const readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

// Ask a question
function getUserInput()
{
    rl.question("What is your name? \n", (name) => {
        console.log(name);
        rlname = name;
    })

    rl.question("What is your age? \n", (age) => {
        console.log(age);
        rlage = age;
    })

    rl.question("What is your favorite color? \n", (color) => {
        console.log(color);
        rlcolor = color;
    })

    console.log("Hello " + rlname + ", you are " + rlage + " years old and your favorite color is " + rlcolor + ".");
}

getUserInput();
rl.close();