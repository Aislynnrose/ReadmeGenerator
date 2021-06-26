
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    message: 'What is your project title?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'What is your project description?',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What is your license?',
    name: 'license',
    choices: [
      'Apache 2.0',
      'Perl',
      'MIT',
      'IBM',
      'Eclipse',
      'None',
    ]
  },
  {
    type: 'input',
    message: 'What is your usage purpose?',
    name: 'usage',
  },
  {
    type: "input",
    name: "contributions",
    message: "What are the contribution guidelines for your project.",
},
{
    type: "input",
    name: "test",
    message: "Waht are the test instructions for your project.",
},
  {
    type: 'input',
    message: 'What is your GitHub URL?',
    name: 'GitHubURL',
  },
  {
    type: 'input',
    message: 'What is your deployed URL?',
    name: 'deployedURL',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'paste your screenshot or gif preview URL',
    name: 'preview',
  },
  {
  type: 'checkbox',
  name: 'technologies',
  message: 'What technologies did you use?',
  choices: [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Node.js',
    'Bootstrap',
    'moment.js',
    'REACT',
    'vue.js',
    'C#',
    'c++',
]}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log("New README file created successfully!")
  );

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then(response => {
    const fileText = generateMarkdown(response);
    const fileName = "README.md";
    writeToFile(fileName, fileText);
});
}

// Function call to initialize app
init();