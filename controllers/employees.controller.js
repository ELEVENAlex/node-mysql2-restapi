const pool = require('../db.js')

const getEmployees = async(req, res, next) => {
    const [row] = await pool.query('SELECT * FROM employee')
    res.json(row)
}

const getEmployee = async(req, res, next) => {
    const [row] = await pool.query('SELECT * FROM employee')
    res.json(row)
}

const createEmployee = async (req, res, next) => {
    const name = req.body.name
    const salary = req.body.salary
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
    //console.log(name, salary)
    res.send({
        id: rows.insertId,
        name,
        salary
    });
}

const updateEmployee = (req, res, next) => {
    res.send('Actualizando empleados');
}

const deleteEmployee = (req, res, next) => {
    res.send('Eliminando empleados');
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}