const express = require ('express')
const { index } = require('../controllers/indexController')
const router = express.Router()

//index
router.get ('/', index)



module.exports = router