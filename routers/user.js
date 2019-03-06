const express = require('express')
const router = express.Router()

const checkPass = require('../helpers/checkPassword')
const { findAll, register, login, update} = require('../controllers/user')
const isLogin = require('../middleware/isLogin')

router.get('/', findAll)
// router.get('/', (req,res) => {
//   console.log(`halo`)
// })
// router.post('/register', (req,res) => {
//     console.log(`halo`)
//   })
router.post('/register', register)
router.post('/login', login)
router.put('/', isLogin, update)

module.exports = router