const express = require("express");
const router = express.Router();

const { getAll, addCreditCard } = require('../controller/creditCard.controller');

router.get('/getAll', getAll); 
router.post('/addCard', addCreditCard);

module.exports = router;
