import inquirer from 'inquirer';
import fs from 'fs';

const team = []

inquirer.prompt(
    [
        {
            type: 'input',
            message: "What is your Managers name?",
            name: 'managerName',
        },

        {
            type: 'input',
            message: "What is the Manager's ID number?",
            name: 'managerId',
        },

        {
            type: 'input',
            message: "What is the Manager's email?",
            name: 'managerEmail',
        },

        {
            type: 'input',
            message: "What is the Manager's office number?",
            name: 'managerOffice',
        }, 

        {   
            type: 'checkbox',
            message: 'Would you like to add a team member?',
            name: 'newTeam',
            choices: ["Manager", "Engineer", "Intern", "That's it, Create my Team!"],
        }
    ]
)
.then((answers) => {
    if (answers.newTeam == "Engineer") {
      inquirer.prompt([
        {
            type: 'input',
            message: "What is your Engineer's name?",
            name: 'engineerName',
        },
      ])
    }
})


// Manager (ID, email, office number)
// Engineer (ID, email, github)
// Inter (ID, email, school)

/* .then((
    {
    managerName,
    managerId,
    managerEmail,
    managerOffice,
}) => {

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
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${managerName}
        Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${managerId}</li>
          <li class="list-group-item">Email: ${managerEmail}</li>
          <li class="list-group-item">Email: ${managerOffice}</li>
        </ul>
      </div>
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
} */