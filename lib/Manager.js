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

}
module.exports = Manager;