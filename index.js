// packages required for the program to run - including pre-built 
const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Style = require("./lib/Style");
const team = [];
let htmlTemplate = '';
let styleTemplate = '';

// First thing that happens when you run the program is that the user is prompted to enter manager information

promptManager()

function CreateTeam() {
 
inquirer.prompt(
    [
        {
            type: 'list',
            message: "What theme would you like your page to be?!",
            name: 'theme',
            choices: ["Red", "Blue", "Green"],
            validate: (value) => { 
                if(value){return true} 
                else {return "i need a value to continue"}
            }
        }
    ]
)

.then((color) => {

let colorChoice = color.theme;

htmlTemplate = htmlTemplate + `         </div>
            </body>
</html>`

data = htmlTemplate;

    fs.writeFile('./dist/index.html', data , function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });


newStyle = new Style(colorChoice)
style = newStyle.getStyle()

    fs.writeFile('./dist/style.css', style, function (errr) {
        if (errr) throw errr;
        console.log('File is created successfully.');

    });  
}); 
}

function newTeamMember() {
    inquirer.prompt(
        [
            {   
                type: 'list',
                message: 'What team member would you like to add?',
                name: 'newTeamMember',
                choices: [ "Engineer", "Intern", "That's it, Create my Team!"],
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
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
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'input',
                message: "What is the Manager's ID number?",
                name: 'managerId',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'input',
                message: "What is the Manager's email?",
                name: 'managerEmail',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'input',
                message: "What is the Manager's office number?",
                name: 'managerOffice', 
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                } 
            }, 

            {
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            }
        ]
    )
.then((answer) => {
    managers = [];
    const newManager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
    managers.push(newManager.name)
    managers.push(newManager.getRole())
    managers.push(newManager.id)
    managers.push(newManager.email)
    managers.push(newManager.officeNum)
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
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'input',
                message: "What is the Engineer's ID number?",
                name: 'engineerId',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },
  
            {
                type: 'input',
                message: "What is the Engineer's email?",
                name: 'engineerEmail',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },
  
            {
                type: 'input',
                message: "What is the Engineer's GitHub?",
                name: 'engineerGithub',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            }

        ]
    )
    .then((answer) => {
        const engineers = [];
        const newEngineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub);
        engineers.push(newEngineer.name)
        engineers.push(newEngineer.getRole())
        engineers.push(newEngineer.id)
        engineers.push(newEngineer.email)
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
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'input',
                message: "What is the Intern's ID number?",
                name: 'internId',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },
  
            {
                type: 'input',
                message: "What is the Intern's email?",
                name: 'internEmail',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },
  
            {
                type: 'input',
                message: "What is the Intern's school?",
                name: 'internSchool',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            },

            {
                type: 'confirm',
                message: 'Would you like to add another team member',
                name: 'newTeam',
                validate: (value) => { 
                    if(value){return true} 
                    else {return "i need a value to continue"}
                }
            }
        ]
    )
    .then((answer) => {
        interns = [];
        const newIntern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        interns.push(newIntern.name)
        interns.push(newIntern.getRole())
        interns.push(newIntern.id)
        interns.push(newIntern.email)
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


