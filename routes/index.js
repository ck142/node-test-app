const express = require('express');
const router = express.Router();
const StoreController = require('../controllers/storecontroller');
// Do work here
router.get('/', StoreController.homePage);

module.exports = router;
