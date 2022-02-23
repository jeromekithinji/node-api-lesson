// link to the database
const db = require("../config/firebase.js")

// methods we'll need to run the student 
// the properties that the student should have like name, age

// constructor is a method thst runs when we make a new instance of the class
class Student {
    // data that every student should have when a new one is being created
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
        this.interests =  data.interests;
        this.dateCreated =  new Date().toUTCString();
    }

    // methods
    // static method - can be ran on the class itself, has no access to any data that is ran on the instance of the class only in the class itself
    // instance method - need to ran on an istance of a class. not running on the student class itself
    // .docs is an array of responses that we'll get back in this casr it will be the student
    // .data methed makes the data usable in the application
    // static findAll() {
    static async findAll() {
        return db.collection("students").get().then(res => {
            return res.docs.map(doc => doc.data())
        })
        // return "I'm all of the students";
    }

    // await and .then are the same thing 
    // .where("field we are looking for", "what we want to check it's eqaul to", the parameter we passed it in or what you want to check it against)
    static async find(id) {
        const response = await db
            .collection("students")
            .where("id", "==", id)
            .get();
        return response.docs.map(doc => doc.data())
        // return `I'm a student with id ${id}`;
    }

    // because it doesn't have the static keyword infront of it, it's an instance method
    // async makes it an asynchronous method
    // async await - handles asynchronous JavaScript behaviour. we need it to wait for the response
    // save() {
    async save() {
        // this.dateModified = new Date().toUTCString();
        // making a copy of the current student
        const student = {...this};
        const res = await db.collection("students").doc().set(student);
        // return "Created student"
    }


    static async destroy(id) {
        await db
            .collection("students")
            .where("id", "==", id)
            .get()
            .then(res => res.forEach(r => r.ref.delete()))
        return "Deleted a student with id " + id;
    }
}

// const findAll = (req, res) => { 
//     res.status(200).send({
//         message: "Here is all the students"
//     })
// }

// const find = (req, res) => { 
//     res.status(200).send({
//         message: "Here is one of the students"
//     })
// }

// const create = (req, res) => {
//     res.status(201).send({
//         message: "Created a new student"
//     })
// }

// const destroy = (req, res) => {
//     res.status(200).send({
//         message: "Student deleted"
//     })
// };

module.exports = Student;