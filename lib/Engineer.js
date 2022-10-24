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
}
module.exports = Engineer;