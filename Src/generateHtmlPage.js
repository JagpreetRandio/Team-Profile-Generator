//Packages needed to generate the html page 

const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');

// generating the main html file 
module.exports = cardsArray => {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
        </head>
    
        <body>
            <nav class="navbar bg-info mb-5">
                <span class="navbar-brand mb-0 h1 w-100 text-center text-white">TEAM PROFILE</span>
            </nav>
            <div class="container">

                ${generateCards(cardsArray)}
                
            </div> 
    
            
           
        
        </body>
    
    
    </html>
      `;
      // all information will be added in the cards array 
    };

  
// generating the manager card for html file 
// all information entered will be shown here 
const generateManager = managerTitle => { return managerTitle.map(manager => { 
    return `<div class="row"><div class="col-6">
    <div class="card mx-auto bg-info mb-3 text-white" style="width: 18rem">
    <h5 class="card-header">${manager.getName()}<br /><br /> <i class="fa-regular fa-star"></i>  Manager</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Phone: ${manager.getOfficeNumber()}</li>
    </ul>
    </div>`
}
).join('');
};


// generating the engineer card for html file 
// all information entered for engineer will be added here 
// also link to github will work too.. it will open a new tab
const generateEngineer = engineerTitle => { return engineerTitle.map(engineer => {
    return ` </div><div class="col-6">
    <div class="card mx-auto bg-info mb-3 text-white" style="width: 18rem">
    <h5 class="card-header">${engineer.getName()}<br /><br /><i class="fa-solid fa-computer"></i>  Engineer</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:"> ${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
    </ul>
    </div>`
}).join('');
};


//generating the intern card for html file 
// all information enetered for intern will be added here
const generateIntern = internTitle => { return internTitle.map( intern => {
    return `</div><div class="col-6">
    <div class="card mx-auto bg-info mb-3 text-white" style="width: 18rem">
    <h5 class="card-header">${intern.getName()}<br /><br /><i class="fa-solid fa-users"></i>  Intern</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:">${intern.getEmail()}/a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
    </div>`
    }
    ).join('');
};


//bringing all information above and putting it all into the cardsarray 
// when user enters all information, all information will be included in the dist folder
const generateCards = employeeArray => {
    let cardsArray = [];
    const managerTitle = employeeArray.filter(team => {
        return team.getRole() === 'Manager';
    });
    const engineerTitle = employeeArray.filter(team => {
        return team.getRole() === 'Engineer';
    });
    const internTitle = employeeArray.filter(team => {
        return team.getRole() === 'Intern';
    });
    if (managerTitle) {
        cardsArray.push(generateManager(managerTitle));
    } 
    if (engineerTitle) {
        cardsArray.push(generateEngineer(engineerTitle));
    } 
    if (internTitle) {
        cardsArray.push(generateIntern(internTitle));
    }
    return cardsArray.join('');
    };