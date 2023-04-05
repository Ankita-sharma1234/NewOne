const connection = require("../Model/db_connect")


const getowner = async (req, res) => {
    try {
        const q1 = "SELECT * FROM hospital_owner"
        await connection.query(q1, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}


const postowner = async (req, res) => {
    try {
        const data = req.body;
        const q2 = " INSERT INTO hospital_owner SET ? "
        await connection.query(q2, data, (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}


const updateowner = async (req, res) => {
    try {
        let userData = [req.body.h_owner_name, req.body.h_owner_addhar, req.body.h_owner_password, req.body.status, req.body.registration, req.params.h_owner_id]
        let sqlQuery = "UPDATE hospital_owner set h_owner_name=?, h_owner_addhar=?, h_owner_password=?, status=?, registration=? WHERE h_owner_id = ?";
        await connection.query(sqlQuery, userData, (err, result) => {
            if (err) {
                console.log(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}
const deleteowner = async (req, res) => {
    try {
        const data = req.body.h_owner_id;
        const q4 = 'DELETE FROM hospital_owner WHERE h_owner_id = ?'
        await connection.query(q4, [data], (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result);
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}


module.exports = { getowner, postowner, updateowner, deleteowner }

