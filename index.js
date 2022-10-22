import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Who do you want to add to the team?",
            name: 'memberOne',
            validate: (value) => { 
                if(value){return true} 
                else {return "You need to enter a name"}
            }

        }
    ]
)

.then(({
    memberOne
}) => {


console.log(memberOne);







})