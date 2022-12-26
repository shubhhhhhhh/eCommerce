const router = require("express").Router();
const ProductController = require("../controller/ProductController");

router.post("/add",ProductController.add);
router.get("/getall",ProductController.getAll);
router.get("/getone",ProductController.getOne);
router.delete("/delete",ProductController.delete);
router.put("/update",ProductController.update);

module.exports = router;