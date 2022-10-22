const inquirer = require('inquirer');
/* import fs from 'fs'; */
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const team = [];

newTeamMember()

function completeTeam() {
    console.log(team)
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
        promptManager();
    } else if (answer.newTeamMember == "Engineer") {
        promptEngineer();
    } else if (answer.newTeamMember == "Intern") {
        promptIntern();
    } else if (answer.newTeamMember == "That's it, Create my Team!") {
        console.log("Team being created!")
    }
})
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */
// Manager Prompt Function
function promptManager() {
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

    const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
    team.push(newManager)

    if(answer.newTeam == true) {
        newTeamMember()
    } else {
        completeTeam()
    }

})
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */
// Engineer Prompt Function
function promptEngineer() {
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
        const newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        team.push(newEngineer)

        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            completeTeam()
        }
    })
}

/* ------------------------------------------------------------------------------------------------------------------------------------------- */
// Intern prompt function
function promptIntern() {
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

        const newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        team.push(newIntern);
        
        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            completeTeam()
        }
    })
}


/* .then((
    {
    managerName,
    managerId,
    managerEmail,
    managerOffice,
}) => {

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