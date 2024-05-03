const Router = require('express');
const router = new Router();
const dataRouter = require('./dataRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/user_data', dataRouter)

module.exports = router;