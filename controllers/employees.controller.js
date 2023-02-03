const getEmployees = (req, res, next) => {
    res.send('Obteniendo empleados')
}

const createEmployees = (req, res, next) => {
    res.send('Creando empleados');
}

const updateEmployees = (req, res, next) => {
    res.send('Actualizando empleados');
}

const deleteEmployees = (req, res, next) => {
    res.send('Eliminando empleados');
}

module.exports = {
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
}