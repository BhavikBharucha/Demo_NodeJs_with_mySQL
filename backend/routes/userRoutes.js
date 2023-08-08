const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");

router.post('/create',UserController.create);
router.get('/selectAll',UserController.selectAll);
router.patch('/update/:id',UserController.update);
router.delete('/deletebyid/:id',UserController.deletebyid);

module.exports = router;