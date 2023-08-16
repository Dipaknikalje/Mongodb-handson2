const { addData, addMultipleData, fetchData, greaterThanSalary, greaterExperience, graduatedExp, updateSalary, deleteEmployee } = require("../controller/students")

const route = require("express").Router()

route.post("/addData",addData)
route.post("/addMultipleData", addMultipleData)
route.get("/fetchdata", fetchData)
route.get("/greatersalary", greaterThanSalary)
route.get("/greaterexp", greaterExperience)
route.get("/gradexp", graduatedExp)
route.get("/updateone", updateSalary)
route.get("/deletemany", deleteEmployee)


module.exports = route
