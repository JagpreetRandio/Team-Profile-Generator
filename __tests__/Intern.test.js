const Intern = require ('../lib/intern');

describe("Intern", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("the test should create an object with a 'name', 'id','email', and 'school'! All tests should include the four objects", () => {
            const obj = new Intern("Jagpreet", 111, "jagpreet@gmail.com", "school");

            expect(obj.getSchool()).toEqual("school");
            //the object needs to be equal to "school" for the test to pass
        });
    });
}); 