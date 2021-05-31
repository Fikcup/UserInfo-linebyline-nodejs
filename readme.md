# Node

In this exercise you will focus on javascript and Node - this will help you understand js more thoroughly since we'll have to think about JS without front end so this may feel a little abstract. We will be building a CLI (Command Line Interface). In addition I will have you implement two APIs - inquirer and Spotify API. This is quite a jump in difficulty but being able to read documentation efficiently and work in a completely new and different environment is key to working with React.

Don't worry though! I'll get you started with some really minimal js code. You will have to parse through google and documentation to get things working though

Download Node and npm (find on google)

Make sure it works on your machine - run ```npm --version and node --version``` if you see the version number then you did it correctly!

Open a new folder for your project and navigate to it in your console

Type ```npm init``` to create a package.json file

Go through all the questions if you would like or just keep hitting enter (you can also run ```npm init -y``` to skip all the questions the -y means yes to all)

create an index.js file in this folder

Run ```npm install inquirer``` - this will install inquirer. Take a look at the dependencies in your package.json to see it there! You will also notice a node_modules folder and a package-lock.json the node modules folder houses all the dependencies and the package-lock locks down the version numbers you used for the project. DO NOT commit node modules to your github (look into .gitignore!)

Inquirer will allow you to create a command line application that can ask a user questions and take their input

Look into the inquirer docs here: https://www.npmjs.com/package/inquirer

# The assignment

Create a CLI (command line application) that asks a user their name, age, and favorite color. After the user inputs this, print "Hello <<name>>, you are <<age>> years old, and your favorite color is <<color>>

HINT: you should be able to run ```node index.js``` and it will run your file. Throw some console.logs in there to make sure it's working

Once you are able to do that awesome work!

# Part 2

Create a CLI that asks a user if they would like to create a user, see how many users are logged, or view users information. If they ask to create a user, ask their name, age, and favorite color. Instead of displaying this user right away - try to write this data to another file to save it - namely a json file. Try out this resource to help get started: https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824

If a user wants to view users - print out the json file from earlier. If there are no users then print "Nobody is here!".

If a user wants to see how many users are logged then print a number that shows how many users are in the json file.

Sample JSON file:

```json
{
    [
        {
            name: "angel",
            age: "22",
            color: "blue"
        },
        {
            name: "rhys",
            age: "20",
            color: "yellow" //idk it sorry lol!!
        },
        {
            name: "Mileena",
            age: "25",
            color: "blood red" 
        },
        {
            name: "Kitana",
            age: "25",
            color: "royal blue" 
        },
        {
            name: "Raiden",
            age: "1000",
            color: "electric yellow" 
        },


    ]
}
```