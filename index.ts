#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        message: "enter first number",
        type:"number",
        name: "first_number",

    },
    {
        message: "enter second number",
        type:"number",
        name: "second_number",

    },
    {
        message: "Select operation to be perform",
        type: "list",
        name: "operator",
        choices:["Addition", "Subtraction","Multiplication","Division","Power", "Remainder", "Floor Division","Upper Division"]

    }
])
if (answer.operator==="Addition"){
    console.log(answer.first_number+answer.second_number)}
else if (answer.operator==="Subtraction"){
    console.log(answer.first_number - answer.second_number)}
else if (answer.operator==="Multiplication"){
    console.log(answer.first_number*answer.second_number)}
else if (answer.operator==="Division"){
    console.log(answer.first_number/answer.second_number)}
else if(answer.operator==="Power"){
    console.log(answer.first_number**answer.second_number)}
else if (answer.operator==="Remainder") {
    console.log(answer.first_number%answer.second_number)}
else if(answer.operator==="Floor Division"){
    console.log(Math.floor(answer.first_number/answer.second_number))}
else if(answer.operator==="Upper Division"){
    console.log(Math.ceil(answer.first_number/answer.second_number))}
else {
    console.log("Invalid operator selected.");
}