// Create reading interface
const readLine = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
    prompt: '>'
});

// Ask a question
function getUserInput()
{
    readLine.question("What is your name?", (name) => {
        console.log(name);
    })

    readLine.question("What is your age?", (age) => {
        console.log(age);
    })

    readLine.question("What is your favorite color?", (color) => {
        console.log(color);
    })

    console.log("Hello " + name + ", you are " + age + " years old and your favorite color is " + color + ".");
}

getUserInput();
readLine.stop();