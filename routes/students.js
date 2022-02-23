const Router = require("express");
const router = Router();
const students = require('../controllers/student.controller.js');


// .send is what we're going to see in the browser
// in this case we're sending back an object
router.get("/", students.findAll)

// make 3 more enpoints for 
// 1. get a  specific student
router.get("/:id", students.find)
// 2. post (make) a new student
// status 201 means the resource as been created
router.post("/", students.create)
// 3. delete a student
// status 204 means the resource as been deleted
router.delete("/:id", students.destroy)

module.exports = router;