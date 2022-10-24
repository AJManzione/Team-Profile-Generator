const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const team = [];
let htmlTemplate = '';

promptManager()



function CreateTeam() {
 
htmlTemplate = htmlTemplate + ` </body>
</html>`
inquirer.prompt(
    [
        {
            name: 'complete',
            message: "Press Enter to generate your team!" 
        }
    ]
)

data = htmlTemplate;

    fs.writeFile('index.html', data , function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });

}


function newTeamMember() {
    inquirer.prompt(
        [
            {   
                type: 'checkbox',
                message: 'What team member would you like to add?',
                name: 'newTeamMember',
                choices: [ "Engineer", "Intern", "That's it, Create my Team!"],
            }
        ]
    )
.then((answer) => {
    if (answer.newTeamMember == "Engineer") {
        promptEngineer();
    } else if (answer.newTeamMember == "Intern") {
        promptIntern();
    } else if (answer.newTeamMember == "That's it, Create my Team!") {
        CreateTeam();
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
    managers = [];
    const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
    managers.push(newManager.getName())
    managers.push(newManager.getRole())
    managers.push(newManager.getId())
    managers.push(newManager.getEmail())
    managers.push(newManager.getOfficeNum())
    team.push(managers);
    htmlTemplate = newManager.getTemplate()

    if(answer.newTeam == true) {
        newTeamMember()
    } else {
        CreateTeam()
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
        const engineers = [];
        const newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        engineers.push(newEngineer.getName())
        engineers.push(newEngineer.getRole())
        engineers.push(newEngineer.getId())
        engineers.push(newEngineer.getEmail())
        engineers.push(newEngineer.getGithub())
        team.push(engineers)
        htmlTemplate = htmlTemplate + newEngineer.getTemplate()


        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            CreateTeam()
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
        interns = [];
        const newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        interns.push(newIntern.getName())
        interns.push(newIntern.getRole())
        interns.push(newIntern.getId())
        interns.push(newIntern.getEmail())
        interns.push(newIntern.getSchool())
        team.push(interns);
        team.push(managers);
        htmlTemplate = htmlTemplate + newIntern.getTemplate()

        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            CreateTeam()
        }
    })
}


