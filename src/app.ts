#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

console.log(chalk.hex('#DEADED').bold('\n\tGame Guess Number is starting!'));

let target :number = Math.floor(Math.random()*11);
//console.log(target);

let bool : boolean = true;

let {elect} = await inquirer.prompt([{
    type: 'rawlist',
    name: 'elect',
    message: 'Choose the total rounds',
    choices: ['3', '5']
}])

for ( let i = 0; i < elect; i++) {
    console.log(`\nround : ${i+1}`);
    console.log(chalk.red("Guess a number between 0 and 10\n"));
    var {num} = await inquirer.prompt([{
        type: 'number',
        name: 'num',
        message: '\tEnter a number\n'
    }]);
    if (target === num) {
        console.log(chalk.green("Congratulation You are correct"));
        console.log(chalk.green("The computer generated number was "),chalk.italic(target));
        console.log(chalk.magenta("\n \t \tYou Won, You can claim your reward"));
        bool = false;
        break;        
    }
    else if (target > num) {
        console.log(chalk.cyan("You are lower than computer generated number"));
        console.log(chalk.red("\tTry Again"));
    }
    else if (target < num ) {
        console.log(chalk.cyan("You are higher than computer generated number"));
        console.log(chalk.red("\tTry Again"));

}
}
if (bool) {
    console.log(chalk.red("\nYou have no more tries /n "));
    console.log(chalk.red.bgRedBright("\t \tTry Again after 24 hours\n"));
}

