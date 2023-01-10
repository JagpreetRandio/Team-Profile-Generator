const Manager = require ('../lib/manager');

describe("Manager", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("the test should create an object with a 'name', 'id', 'email', and 'office number! All tests should include the four objects", () => {
            const obj = new Manager("Jagpreet", 111, "jagpreet@gmail.com", 1112223333);

            expect(obj.officeNumber).toEqual(1112223333);
            //the object needs to be equal to "office number" for the test to pass
        });
    });
}); 