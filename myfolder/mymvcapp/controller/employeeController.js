const empModel = require("./../models/employeeModel")
const MyApiError = require("./../utils/MyApiError")
const globalErrorHandler = require("./../utils/MyApiError")
const  myLogger=require("../utils/empLog")
exports.getEmployees=async(req,res,next)=>{
 try{
    const empList =await empModel.find()
    res.status(200).json({
        status:"Success",
        result:empList.length,
        data:{
            employeeList:empList
        }
    })
  }
  catch(err){
       next(new MyApiError(404,"Employee data not found"))

  }

}

exports.addNewEmployee=async(req,res,next)=>{
 try{
    const newEmp =await empModel.create(req.body)
    res.status(201).json({
        status:"Success",
        msg:"Employee Added Successfully",
        data:{
            newemployee:newEmp
        }

    })
 }
  catch(err)
    {
        next(new MyApiError(404,"Employee Registeration Failed. Please check id and details")) 

    }

}

exports.showHome=async(req,res)=>{
    try{
        myLogger.log("info", `Employees-data -fetching service called ${req.originalUrl}`);

        const empList=await empModel.find()
        return res.render("Home",{
            employeeList:empList
        })
    }
    catch(err){
        return res.render("Error")
    }
}


exports.showUpdateForm = async (req, res) => {
    try {
        const emp = await empModel.findById(req.params.id);  
        if (!emp) {
            return res.render("Error", { message: "Employee not found!" });
        }
        return res.render("UpdateForm", {
            employee: emp  
        });
    } catch (err) {
      
        return res.render("Error");
    }
};



exports.updateEmployee = async (req, res) => {
    try {
        console.log("Update Data:", req.body); 
        const { ename, email, eid } = req.body;  
        console.log("Update Data:", req.body);  
        
      
        const updatedEmp = await empModel.findByIdAndUpdate(req.params.id, {
            ename: ename,
            email: email,
            eid: eid
        }, { new: true });  
        
        if (!updatedEmp) {
            return res.status(404).send({ message: "Employee not found or update failed" });
        }

      
        return res.redirect("/api/v1/employees");
    } catch (err) {
        console.error("Error updating employee:", err);
        return res.status(500).send({ message: "Internal server error" });
    }
};




exports.deleteEmployee = async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id);  
        return res.redirect("/api/v1/employees");  
    } catch (err) {
        console.error("Error deleting employee:", err);
        return res.render("Error");
    }
};
