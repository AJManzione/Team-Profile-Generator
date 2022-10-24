function Intern (name, id, email, school) {
        this.name = name,   
        this.id = id,
        this.email = email,
        this.school = school
        
    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email
    }
    this.getSchool = () => {
        return this.school
    }
    this.getRole = () => {
        return "Intern";
    }
    this.getTemplate = () => {
        return  `  
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${this.name} <br>
        Intern
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item" id="link">Email:<a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>`
    }
}

module.exports = Intern;

