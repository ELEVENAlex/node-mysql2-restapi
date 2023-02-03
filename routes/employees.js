const express = require('express');
const router = express.Router();
const {getEmployees, createEmployees, updateEmployees, deleteEmployees} = require('../controllers/employees.controller')


router.get('/', getEmployees)
  
router.post('/', createEmployees)

router.put('/', updateEmployees)

router.delete('/', deleteEmployees)



module.exports = router;