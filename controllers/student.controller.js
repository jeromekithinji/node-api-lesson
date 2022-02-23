const Student = require("../models/student.js");

// Need to add asycn and await inorder to wait for the repsonse from the findAll method
const findAll = async (req, res) => { 
    const students = await Student.findAll();
    res.status(200).send({ students })
}

// req.params is anything that has been past to us as per the request parsed from the URL in this case would be the id
const find = async (req, res) => {
    const student = await Student.find(req.params.id)
    res.status(200).send({ student })
}

// req has a body 
const create = (req, res) => {
    const newStudent = new Student(req.body);
    const message = newStudent.save();
    res.status(201).send({ message, newStudent });
}

const destroy = (req, res) => {
    const message = Student.destroy(req.params.id)
    res.status(202).send({ message })
};

module.exports = { findAll, find, create, destroy };