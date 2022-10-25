const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    getTemplate() {
        return  `  
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${this.getName()} <br>
            ${this.getRole()}
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item" id="link">Email:<a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item" id="link">Github:<a href="https://github.com/${this.getGithub()}/">${this.getGithub()}</a></li>
            </ul>
        </div>`
    }
}
module.exports = Engineer;