const  x = require("../app");

const request = require("supertest");


describe("GET / ", () =>{
    test("It should respond with admin", async() => {
        const response = await request(x.app).get("/admin");
        expect(response.statusCode).toBe(200);
    });

});
describe("GET / ", () =>{
    test("It should respond with faculty", async() => {
        const response = await request(x.app).get("/faculty");
        expect(response.statusCode).toBe(200);
    });

});
describe("GET / ", () =>{
    test("It should respond with student", async() => {
        const response = await request(x.app).get("/student");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with about", async() => {
        const response = await request(x.app).get("/about");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with less", async() => {
        const response = await request(x.app).get("/less");
        expect(response.statusCode).toBe(200);
    });

});
describe("GET / ", () =>{
    test("It should respond with faq", async() => {
        const response = await request(x.app).get("/faq");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with", async() => {
        const response = await request(x.app).get("/");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with usename", async() => {
        const response = await request(x.app).get("/getpass_student:username");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with username", async() => {
        const response = await request(x.app).get("/startsession:username");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with getall", async() => {
        const response = await request(x.app).get("/getall");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with getall_fac", async() => {
        const response = await request(x.app).get("/getall_fac");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with search", async() => {
        const response = await request(x.app).get("/getall_attend:search");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with check:search", async() => {
        const response = await request(x.app).get("/getall_check:search");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with student:username", async() => {
        const response = await request(x.app).get("/getpass_student:username");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with changepass", async() => {
        const response = await request(x.app).get("/getchangepass:password");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with search name", async() => {
        const response = await request(x.app).get("/search/:name");
        expect(response.statusCode).toBe(200);
    });

});

describe("GET / ", () =>{
    test("It should respond with fac:name", async() => {
        const response = await request(x.app).get("/search_fac/:name");
        expect(response.statusCode).toBe(200);
    });

});