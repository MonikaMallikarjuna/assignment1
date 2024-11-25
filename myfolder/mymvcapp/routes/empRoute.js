const express = require("express")
const employeeController = require("./../controller/employeeController")

const router = express.Router()

router.route("/home")
.get(employeeController.getEmployees)
.post(employeeController.addNewEmployee)


module.exports=router
