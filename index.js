import inquirer from 'inquirer';
import fs from 'fs';

const team = []

newTeamMember()

function completeTeam() {
    console.log("Team being created!")
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

function newTeamMember() {
    inquirer.prompt(
        [
            {   
                type: 'checkbox',
                message: 'What team member would you like to add?',
                name: 'newTeamMember',
                choices: ["Manager", "Engineer", "Intern", "That's it, Create my Team!"],
            }
        ]
    )
.then((answer) => {
    if(answer.newTeamMember == "Manager") {
        manager();
    } else if (answer.newTeamMember == "Engineer") {
        engineer();
    } else if (answer.newTeamMember == "Intern") {
        intern();
    } else if (answer.newTeamMember == "That's it, Create my Team!") {
        console.log("Team being created!")
    }
})
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */

// Manager Prompt Function
function manager() {
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
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam'
            }
        ]
    )
.then((answer) => {
    if(answer.newTeam == true) {
        newTeamMember()
    } else {
        completeTeam()
    }
})
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */


// Engineer Prompt Function
function engineer() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: "What is your Engineer's name?",
                name: 'engineerName',
            },

            {
                type: 'input',
                message: "What is the Engineer's ID number?",
                name: 'engineerId',
            },
  
            {
                type: 'input',
                message: "What is the Engineer's email?",
                name: 'engineerEmail',
            },
  
            {
                type: 'input',
                message: "What is the Engineer's GitHub?",
                name: 'engineerGithub',
            },

            {
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam'
            }

        ]
    )
    .then((answer) => {
        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            completeTeam()
        }
    })
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */
// Intern prompt function
function intern() {
    inquirer.prompt(
        [
            {
                type: 'input',
                message: "What is your Intern's name?",
                name: 'internName',
            },

            {
                type: 'input',
                message: "What is the Intern's ID number?",
                name: 'internId',
            },
  
            {
                type: 'input',
                message: "What is the Engineer's email?",
                name: 'internEmail',
            },
  
            {
                type: 'input',
                message: "What is the Engineer's school?",
                name: 'internSchool',
            },

            {
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam'
            }
        ]
    )
    .then((answer) => {
        if(answer.newTeam == true) {
            newTeamMember
        } else {
            completeTeam()
        }
    })
}



/* 
.then((answers) => {
    */
// Manager (ID, email, office number)
// Engineer (ID, email, github)
// Intern (ID, email, school)

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