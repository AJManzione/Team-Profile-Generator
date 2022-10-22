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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
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