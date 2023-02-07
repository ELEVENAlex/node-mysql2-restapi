const pool = require('../db.js')

const getEmployees = async(req, res, next) => {
    try{
        const [row] = await pool.query('SELECT * FROM employee')
        res.json(row)
    } catch (error){
        return res.status(500).json({
            message: 'Something went wrong!'
        })
    }
}

const getEmployee = async(req, res, next) => {
    try{
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])

        if(rows.length <= 0){
            return res.status(404).json({
                message: 'Employee not found!'
            })
        }
        res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Something went wrong!'
        })
    }
}

const createEmployee = async (req, res, next) => {
    try{
        const name = req.body.name
        const salary = req.body.salary
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        //console.log(name, salary)
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error){
        return res.status(500).json({
            message: 'Something went wrong!'
        })
    }
}

const updateEmployee = async (req, res, next) => {
    try{
        const {id} = req.params
        const {name, salary} = req.body
        
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?,name), salary = IFNULL(?,salary) WHERE id = ?', [name, salary, id])
        
        if(result.affectedRows === 0){
            return res.status(404).json({
                message: 'Employee not found'
            })
        }
    
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Something went wrong!'
        })
    }
}

const deleteEmployee = async (req, res, next) => {
    try{
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])

        if(result.affectedRows <= 0){
            return res.status(404).json({
                message: 'Employee not found!'
            })
        }
        res.send('Eliminado usurio')
    
        // if(rows.length <= 0){
        //     return res.status(404).json({
        //         message: 'Employee not found!'
        //     })
        // }
        // res.json(rows[0])
    } catch (error){
        return res.status(500).json({
            message: 'Something went wrong!'
        })
    }
}

module.exports = {
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}