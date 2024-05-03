const Router = require('express');
const dataController = require('../controllers/dataController');
const router = new Router()

router.post('/', dataController.create)
router.get('/', dataController.read)
router.put('/:id', dataController.update)
router.delete('/:id', dataController.delete)

module.exports = router;