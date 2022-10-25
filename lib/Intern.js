const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }  
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern";
    }

    getTemplate() {
        return  `  
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h3>${this.getName()}</h3> <br>
        <h4> <img width="30px"src="/lib/images/graduation-cap-solid.svg" alt="">${this.getRole()}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.getId()}</li>
            <li class="list-group-item" id="link">Email:<a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            <li class="list-group-item">School: ${this.getSchool()}</li>
        </ul>
    </div>`
    }
}

module.exports = Intern;

