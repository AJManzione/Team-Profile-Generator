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
    this.getschool = () => {
        return this.school
    }
}

module.exports = Intern;

