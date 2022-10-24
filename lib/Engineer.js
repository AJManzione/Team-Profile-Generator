const { relativeTimeThreshold } = require("moment");

// Engineer (ID, email, github)
function Engineer(name, id, email, github) {
        this.name = name,   
        this.id = id,
        this.email = email,
        this.github = github,

    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getGithub = () => {
        return this.github;
    }
    this.getRole = () => {
        return "Engineer";
    }
    this.getTemplate = () => {
        return  `  
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${this.name} <br>
            Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.id}</li>
                <li class="list-group-item" id="link">Email:<a href="mailto:${this.email}">${this.email}</a></li>
                <li class="list-group-item">GitHub: ${this.github}</li>
            </ul>
        </div>`
    }
}
module.exports = Engineer;