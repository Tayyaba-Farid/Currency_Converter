#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    PKR: {
        PKR: 1,
        USD: 0.0036,
        RIYAL: 0.013,
    },
    USD: {
        USD: 1,
        PKR: 280,
        RIYAL: 3.75,
    },
    RIYAL: {
        RIYAL: 1,
        USD: 0.27,
        PKR: 74,
    },
};
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select your currency: ",
        type: "list",
        choices: ["PKR", "USD", "RIYAL"],
    },
    {
        name: "to",
        message: "Select your conversion currency: ",
        type: "list",
        choices: ["PKR", "USD", "RIYAL"],
    },
    {
        name: "amount",
        message: "Enter your amount: ",
        type: "number",
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = currency[from][to] * amount;
    console.log(`Your convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid inputs!");
}
