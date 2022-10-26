
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Team Profile Generator

## The team profile generator allows a user to add an employee to their team and select between manager, engineer and intern and input data such as email's id numbers, 

## Table of Contents
1. [General Info](#general)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#contributing)
5. [Contact](#contact) 

## About this project

- The motivation for this project was to create a webpage with no existing index.html file but to allow the user of the application to create one when they go through the prompts. When the user starts the program they are prompted to enter info about their manager such as name, id #, email, and office number. After that the user is prompted to choose between adding an intern or an engineer to the team. similarly when the user selects engineer, they are prompted to enter information about the employee such as name, id, and email but additionally the engineer's github. the user can then add as many engineers as they want or can also add interns. The only difference when prompted to enter information about the intern is that instead of entering the intern's github account they will be prompted to enter the interns school.
The project utilizes inquirer to prompt the user as well as file system (fs) to create the file. additionally I went ahead and created one more prompt that allows the user to select a color theme for their web page. The user has the choices of red, blue, and green and when the user selects one of those choices the web-page will appear that color, this was not in the ask but was a fun little bonus that I added for this project.
This application helped with practicing working with node as well as inquirer and fs, as done in the previous project, except before I only generated a markdown file but this time i'm generating an HTML file which obviously needs much more specific elements to run properly. The way that I allowed the user to enter as many employees as they want and for the relevent card to be generated with that was buy storing the html content into the object class constructor of that specific employee and using${this.example} to make that specific information be self referential to that html content. Code snippet below.


# Technologies
- HTML
- CSS
- JavaScript
- Bootstrap
- Node.js
- Git
- GitHub

# Installaton
*You can install this program by first cloning the repository and then running npm install in the console followed by node index.js to run the application*

# Usage
*This project can be used to allow a user to create a team*

# License
*MIT License*

# Contributing
*Me*

# Contact: 
[GitHub](https://github.com/Ajmanzione)

# Tests:
*Yes*

# Questions:
Email: imanzioneaj@gmail.com
