let express = require('express');

let router = express.Router();

let slotBookingControllers = require('../controllers/slotBookingControllers');

router.post('/slot' , slotBookingControllers.sloBook);
router.get('/slotGet', slotBookingControllers.slotGet)

module.exports = router ; 
