// Manager (ID, email, office number)
function Manager (name, id, email, officeNum) {
        this.name = name,   
        this.id = id,
        this.email = email,
        this.officeNum = officeNum

    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getOfficeNum = () => {
        return this.officeNum;
    }
    this.getRole = () => {
        return "Manager";
    }
    this.getTemplate = () => {
        return `
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
                ${this.name} <br>
                Manager
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${this.id}</li>
                  <li class="list-group-item" id="link">Email:<a href="mailto:${this.email}">${this.email}</a></li>
                  <li class="list-group-item">Office #: ${this.officeNum}</li>
                </ul>
              </div>
        `
    }

}
module.exports = Manager;