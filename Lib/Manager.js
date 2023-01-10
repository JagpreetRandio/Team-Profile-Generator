const Employee = require("./Employee");
// used employee js
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name,id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    getRole(){
        return "Manager";
    }
    // added office number!
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;