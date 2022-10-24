const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { Console } = require('console');
const internal = require('stream');

const team = [];

promptManager()



function CreateTeam() {

console.log(team)

inquirer.prompt(
    [
        {
            name: 'complete',
            message: "Press Enter to generate your team!" 
        }
    ]
)

/* const engineerName = team.map(element => element.Engineer)
console.log(engineersName); */

}

/* 
.then(({
    


}) => {
team.forEach(getManagerInfo);
function getManagerInfo() {
    const employeeName = team[0];
    managerName = employeeName.name;
    const employeeID = team[0];
    managerID = employeeID.id;
    const employeeEmail = team[0];
    managerEmail = employeeEmail.email;
    const employeeNum = team[0];
    managerOfficeNum = employeeNum.officeNum;
}

team.forEach(getEngineerInfo);
function getEngineerInfo() {
    for (i = 1; i < team.length - 1; i++) {
        const employee = employee + [i]
        employee[i] = team[i]
    if(!employee[i]) {
        return;
    } else { 
        const employeeName = employeeName[i];
        employeeName[i] = team[i];
        engineerName[i] = employeeName[i].name;

        const employeeID = employeeID[i];
        employeeID[i] = team[i];
        engineerId[i] = employeeID[i].id;

        const employeeEmail = employeeEmail[i];
        employeeEmail[i] = team[i];
        engineerEmail[i] = employeeEmail[i].email;

        const employeeGithub = employeeGithub[i];
        employeeGithub[i] = team[i];
        engineerGithub[i] = employeeGithub[i].github;
    }}
}

team.forEach(getInternInfo);
function getInternInfo() {
    const employeeThree = team[2];
    internName = employeeThree.name;
    const employeeThreeID = team[2];
    internId = employeeThreeID.id;
    const employeeThreeEmail = team[2];
    internEmail = employeeThreeEmail.email;
    const employeeThreeSchool = team[2];
    internSchool = employeeThreeSchool.school
}





    const internTemplate = `  
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${internName} <br>
        Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internId}</li>
            <li class="list-group-item" id="link">Email:<a href="mailto:${internEmail}">${internEmail}</a></li>
            <li class="list-group-item">School: ${internSchool}</li>
        </ul>
    </div>`

    const engineerTemplate = `  
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${engineerName} <br>
        Engineer
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerId}</li>
            <li class="list-group-item" id="link">Email:<a href="mailto:${engineerEmail}">${engineerEmail}</a></li>
            <li class="list-group-item">GitHub: ${engineerGithub}</li>
        </ul>
    </div>`

    const managerTemplate = `
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
        ${managerName} <br>
        Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${managerID}</li>
          <li class="list-group-item" id="link">Email:<a href="mailto:${managerEmail}">${managerEmail}</a></li>
          <li class="list-group-item">Office #: ${managerOfficeNum}</li>
        </ul>
      </div>
      ${engineerTemplate}
      ${internTemplate}
</body>
</html>
`
    createIndexHtml(managerTemplate)
    
    function createIndexHtml(data) {
        fs.writeFile("index.html", data, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("index.html generated!")
            }
        })
    }
})
};

 */
/* ------------------------------------------------------------------------------------------------------------------------------------------- */

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

        if(answer.newTeam == true) {
            newTeamMember()
        } else {
            CreateTeam()
        }
    })
}


