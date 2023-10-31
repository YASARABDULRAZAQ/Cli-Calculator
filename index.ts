
//#! /usr/bin/env node
import inquirer from "inquirer";
type answersType={
    num1:number,
    num2:number,
    operation:string
}
inquirer
.prompt([
    {
    type: "number",
    Name:"num1",
    message: "Enter your first number",
},

 {   
    type: "number",
Name:"num2",
message: "Enter your    Second number",
},
{
    type: "list",
    Name:"operation",
    message: "Select Operation",
    Choice:["+","-","*","/"],
},
])

.then((answers:answersType) => {
    if (answers.operation =="+") {
const result= answers. num1+ answers.num2;
console.log ("Sum",result);
}
else if (answers.operation =="-") {
const result= answers. num1- answers.num2;
console.log ("Subtruction",result);

} else if (answers.operation =="*") {
const result= answers. num1* answers.num2;
console.log ("multiplication",result);

 }else if (answers.operation =="/") {
const result= answers. num1/ answers.num2;
console.log ("Devision",result);
 }
})
