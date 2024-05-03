const Router = require("express");
const userController = require("../controllers/userController");
const router = new Router();

router.post('/reg', userController.reg)
router.post('/log', userController.log)

module.exports = router;