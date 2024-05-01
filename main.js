#! /usr/bin/env node  
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.rgb(100, 200, 10) `\t\tWELCOME TO OUR SIMPLE GRADING PROGRAM\t\t\n`);
let total_marks = 850;
while (true) {
    let obtain_marks = await inquirer.prompt([
        {
            name: "give",
            type: "number",
            message: chalk.red("Enter your obatin marks in Matric, total 850 Marks :")
        }
    ]);
    let percent = (obtain_marks.give * 100 / total_marks);
    console.log(chalk.bold.underline.green(`\nYOUR MATRIC PERCENTAGE IS ${percent.toFixed(2)} %\n`));
    if (percent >= 90 && percent <= 100) {
        console.log(chalk.bold.blue `YOUR GRADE IS A1`);
    }
    else if (percent >= 80 && percent <= 90) {
        console.log(chalk.bold.yellow `YOUR GRADE IS A`);
    }
    else if (percent >= 70 && percent <= 80) {
        console.log(chalk.bold.yellow `YOUR GRADE IS A`);
    }
    else if (percent >= 60 && percent <= 70) {
        console.log(chalk.bold.yellow `YOUR GRADE IS B`);
    }
    else if (percent >= 50 && percent <= 60) {
        console.log(chalk.bold.yellow `YOUR GRADE IS C`);
    }
    else if (percent >= 40 && percent <= 50) {
        console.log(chalk.bold.yellow `YOUR GRADE IS D`);
    }
    else {
        console.log(chalk.underline.red `You are fail`);
    }
    let response = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            message: "Do you want to continue Grading program or exit?",
            choices: ["Continue", "Exit"]
        }
    ]);
    if (response.action === "Exit") {
        console.log(chalk.bold.blue `Grading Program Off. Goodbye!`);
        break; // Exit the loop and end the program
    }
    // If the user chooses to continue, the loop will iterate again
    console.log("\n");
}
