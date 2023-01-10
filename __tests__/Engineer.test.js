const Engineer = require ('../lib/engineer');

describe("Engineer", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("the test should create an object with a 'name', 'id', 'email', and 'github username'! All tests should include the four objects", () => {
            const obj = new Engineer("Jagpreet", 111, "jagpreet@gmail.com", "github username");

            expect(obj.github).toEqual("github username");
            //the object needs to be equal to "github username" for the test to pass
        });
    });
}); 