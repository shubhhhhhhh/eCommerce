const router = require("express").Router()
const AdminController = require("../controller/AdminController")

router.post("/login",AdminController.login)

module.exports = router