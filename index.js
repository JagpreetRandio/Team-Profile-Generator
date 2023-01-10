// Packages required for code
const fs = require('fs');
const inquirer = require('inquirer');

// 

const generateHTML = require('./Src/generateHtmlPage');
const Manager = require('./Lib/Manager');
const Intern = require('./Lib/Intern');
const Engineer = require('./Lib/Engineer');

// Prompts for questions 

class Prompt{
    constructor() {
        this.employeeArray = [];
    }

    /**
     * @returns the array of all Employee objects
     */

    getemployeeArray() {
        return this.employeeArray;
    }

// Questions for building team profile
questions() {
    inquirer.prompt(
    {
     type: 'list',
     name: 'employeeType',
     message: "Which type of employee would you like to add to the team?",
     choices: ['Manager', 'Engineer', 'Intern', 'Ive added all of the employees!']
    })
    .then(({employeeType}) => {
        if(employeeType === 'Manager'){
        inquirer.prompt([
    {
    // All data for manager
     type: 'input',
     name: 'name',
     message: "Please enter the manager's name",
     validate: nameInput => {
         if (/[A-Za-z]/.test(nameInput)) {
             return true;
         } else {
             console.log(" Oops! Check again! Please enter the manager's name!");
             return false;
         }
     }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's employee id",
        validate: idInput => {
            if (/[0-9]/.test(idInput)) {
                return true;
            } else {
                console.log(" Oops! Check again! The ID must be a number!");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: emailInput => {
            if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                return true;
            } else {
                console.log(" Oops! Check again! Make sure you entered the correct email!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (/[0-9]/.test(officeNumberInput)) {
                return true;
            } else {
                console.log(" Oops! Check again! The office number should only be numbers!");
                return false;
            }
        }
    },
    ])

    // All manager data will go into the array
    .then( (templateData) => {
        const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
        this.employeeArray.push(newManager);
        // Back to menu
        this.questions();
    });
    //All data for engineer
    } else if (employeeType === 'Engineer') {
            inquirer.prompt([
                    {
                     type: 'input',
                     name: 'name',
                     message: "Please enter the engineer's name",
                     validate: nameInput => {
                        if (/[A-Za-z]/.test(nameInput)) {
                            return true;
                        } else {
                            console.log(" Oops! Check again! Please enter the engineer's name!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'input',
                     name: 'id',
                     message: "Please enter the engineer's employee id",
                     validate: idInput => {
                        if (/[0-9]/.test(idInput)) {
                            return true;
                        } else {
                            console.log(" Oops! Check again! The ID must be a number!");
                            return false;
                        }
                    } 
                    },
                    {
                     type: 'input',
                     name: 'email',
                     message: "Please enter the engineer's email",
                     validate: emailInput => {
                        if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                            return true;
                        } else {
                            console.log(" Oops! Check again! Make sure you entered the correct email!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'input',
                     name: 'github',
                     message: "Please enter the engineer's Github username",
                     validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log(" Oops! Check again! Make sure you entered the correct Github username!");
                            return false;
                        }
                    }  
                    }

                // All engineer data will go into the array
                ]).then( templateData => {
                    const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                    this.employeeArray.push(newEngineer);
                    // Back to menu
                    this.questions();
                });
                //all data for intern 
        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                 type: 'input',
                 name: 'name',
                 message: "Please enter the intern's name",
                 validate: nameInput => {
                    if (/[A-Za-z]/.test(nameInput)) {
                        return true;
                    } else {
                        console.log(" Oops! Check again! Please enter the intern's name!");
                        return false;
                    }
                }
                },
                {
                 type: 'input',
                 name: 'id',
                 message: "Please enter the intern's employee id",
                 validate: idInput => {
                    if (/[0-9]/.test(idInput)) {
                        return true;
                    } else {
                        console.log(" Oops! Check again! The ID must be a number!");
                        return false;
                    }
                } 
                },
                {
                 type: 'input',
                 name: 'email',
                 message: "Please enter the intern's email",
                 validate: emailInput => {
                    if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(emailInput)) {
                        return true;
                    } else {
                        console.log(" Oops! Check again! Make sure you entered the correct email!");
                        return false;
                    }
                }
                },
                {
                 type: 'input',
                 name: 'school',
                 message: "Please enter the intern's school name",
                 validate: schoolInput => {
                    if (/[A-Za-z]/.test(schoolInput)) {
                        return true;
                    } else {
                        console.log(" Oops! Check again! Make sure you entered the correct school!");
                        return false;
                    }
                }  
                }

            // All intern data will go into the array
            ]).then( templateData => {
                const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                this.employeeArray.push(newIntern);
                //Back to menu
                this.questions();
            });

        } else if (employeeType === 'Ive added all of the employees!') {
            //function will write down all the data in the html file 
            const pagehtml = generateHTML(this.getemployeeArray());
            fs.writeFile('./dist/index.html', pagehtml, err => {
                if (err) throw new Error(err);

                console.log(' Good Job! Page has beenn created! To check out page, head over to the dist folder to see the team profile you have created!');
            });
        }
    });

}
};

// Activates prompts in the command line 
const prompt = new Prompt();
prompt.questions();

module.exports = Prompt;