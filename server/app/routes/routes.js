const express = require('express');
const router = express.Router();

const controller = require('./controllers')

router.post('/add-button', controller.addItem)
router.get('/', controller.getItem)
router.put('/updateItem', controller.updateItem)
router.delete('/remove', controller.deleteItem)


module.exports = router;