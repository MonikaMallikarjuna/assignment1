const express =require("express")
const employeeController=require("./../controller/employeeController")

const router=express.Router()
router.route("/").get(employeeController.showHome)


router.route("/update/:id").get(employeeController.showUpdateForm);


router.route("/update/:id").post(employeeController.updateEmployee);

router.route("/delete/:id").get(employeeController.deleteEmployee);
module.exports=router