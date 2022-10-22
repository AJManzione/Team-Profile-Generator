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



const template =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>HELLO WORLD</p>
</body>
</html>
`;

    createHtmlFile(template)
});

function createHtmlFile(data) {

// Filesave code 
fs.writeFile(`./index.html`, data, (err)=>{
    if (err){
        console.log(err)
    } console.log("HTML Generated");
})
}