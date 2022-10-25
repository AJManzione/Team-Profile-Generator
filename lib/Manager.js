const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    getRole() {
        return "Manager";
    }
    
    getTemplate() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <link href="/dist/style.css" rel="stylesheet">
            <title>Document</title>
        </head>
        <body>
            <header>
                <h1>My Team</h1>
            </header>
        <div class="d-flex flex-row mb-3 justify-content-between flex-wrap">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                ${this.getName()} <br>
                ${this.getRole()}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${this.getId()}</li>
                  <li class="list-group-item" id="link">Email:<a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                  <li class="list-group-item">Office #: ${this.officeNum}</li>
                </ul>
              </div>`
    }

}
module.exports = Manager;