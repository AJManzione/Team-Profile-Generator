
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team Profile Generator

![alt text](.//dist/images/example.png)

## The team profile generator allows a user to add an employee to their team and select between manager, engineer and intern and input data such as email's id numbers, 


[Video Walkthrough] (https://www.example.com](https://www.youtube.com/watch?v=P6LUVCYvg_4&t=20s)


## Table of Contents
1. [General Info](#general)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#contributing)
5. [Contact](#contact) 

## About this project

- The motivation for this project was to create a webpage with no existing index.html file but to allow the user of the application to create one when they go through the prompts. When the user starts the program they are prompted to enter info about their manager such as name, id #, email, and office number. After that the user is prompted to choose between adding an intern or an engineer to the team. similarly when the user selects engineer, they are prompted to enter information about the employee such as name, id, and email but additionally the engineer's github. the user can then add as many engineers as they want or can also add interns. The only difference when prompted to enter information about the intern is that instead of entering the intern's github account they will be prompted to enter the interns school.
- The project utilizes inquirer to prompt the user as well as file system (fs) to create the file. additionally I went ahead and created one more prompt that allows the user to select a color theme for their web page. The user has the choices of red, blue, and green and when the user selects one of those choices the web-page will appear that color, this was not in the ask but was a fun little bonus that I added for this project.
- This application helped with practicing working with node as well as inquirer and fs, as done in the previous project, except before I only generated a markdown file but this time i'm generating an HTML file which obviously needs much more specific elements to run properly. The way that I allowed the user to enter as many employees as they want and for the relevent card to be generated with that was buy storing the html content into the object class constructor of that specific employee and using${this.example} to make that specific information be self referential to that html content. Code snippet below.


## Appending the specific HTML content to the data 

- A method that exists inside every employee (ex: manager, engineer, intern) is a method called getTemplate and this contains exact string literal content for the html to be functional and designed as intended. Inside of this content, and where specific data needs to be displayed I used other methods such as getEmail, getName and so on. These methods are retrieved from the parent class constructor called employee which extends repeatable information such as name, id, and email which is why they are being called as methods. Again, these methods exist inside of the parent class and not the more specific classes, for specific class information such as github which is only being asked for the engineer and school for intern there was no need to use methods to get this information, instead this.officeNum, this.github, and this.school sufficed for their respected classes.
- Code snippet for engineer's "getTemplate" seen below

```
    getTemplate() {
        return  `  
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            <h3>${this.getName()}</h3>
            <h4> <img width="30px" src="/dist/images/wrench-solid.svg" alt="A wrench">${this.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item" id="link">Email:<a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item" id="link">Github:<a href="https://github.com/${this.getGithub()}/">${this.getGithub()}</a></li>
            </ul>
        </div>`
    }
```

# Technologies
- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- Inquirer & Jest modules
- Git
- GitHub

# Installaton
- Node.js is required to run this application
- First clone the repository 
- Then running npm i in the console 
- Last index.js to run the application

# Usage
*This project can be used by all who wish to use it*

# License
*MIT License*

# Contributing
*Anthony Manzione*

# Contact: 
[GitHub](https://github.com/Ajmanzione)

# Tests:
*19 tests were run using jest*

# Questions:
Email: imanzioneaj@gmail.com
