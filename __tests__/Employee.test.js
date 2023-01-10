const Employee = require ('../lib/employee');

describe("Employee", () => {
    describe("Initialisation", () => {
        // to test an object's constructor
        it("the test should create an object with a 'name', 'id', and 'email'! All tests should include the three objects", () => {
            const obj = new Employee("Jagpreet", 111, "jagpreet@gmail.com");

            expect(obj.name).toEqual("Jagpreet");
            //the object needs to be equal to "Jagpreet" for the test to pass
        });
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Employee("Jagpreet", 111, "jagpreet@gmail.com");

            expect(obj.id).toEqual(111);
            //the object needs to be equal to "111" for the test to pass
        });
        it("should create an object with 'name', 'id', 'email'", () => {
            const obj = new Employee("Jagpreet", 111, "jagpreet@gmail.com");

            expect(obj.email).toEqual("jagpreet@gmail.com");
            //the object needs to be equal to "jagpreet@gmail.com" for the test to pass
        });
    });
}); 