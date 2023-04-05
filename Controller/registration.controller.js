const connection = require("../Model/db_connect")

// const bcrypt = require('bcrypt');


const getregister = async (req, res) => {
    try {
        const q1 = "SELECT * FROM hospital_registration"
        await connection.query(q1, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}


const postregister = async (req, res) => {
    try {
        const data = req.body;
        const q2 = " INSERT INTO hospital_registration SET ? "
        await connection.query(q2, data, (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}


const updateregister = (req, res) => {

    let userData = [req.body.h_owner_id, req.body.h_registration_name, req.body.h_registration_type, req.body.h_registration_establish_year, req.body.h_registaration_address, req.body.h_registration_state, req.body.h_registration_city, req.body.h_registration_pincode, req.body.h_registration_landmark, req.body.h_registration_contact, req.body.h_registration_status, req.params.h_registration_no]
    let sqlQuery = `UPDATE hospital_registration SET  h_owner_id= ?, h_registration_name = ?, h_registration_type = ?, h_registration_establish_year = ?,h_registaration_address = ?,h_registration_state = ?, h_registration_city = ?,  h_registrtaion_pincode = ?, h_registration_landmark = ?, h_registration_contact = ?,  h_registration_status = ? where h_registration_no = ? `;
    connection.query(sqlQuery, userData, (err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
        }
    })


}
const deleteregister = async (req, res) => {
    try {
        const data = req.params.h_registration_no;
        const q4 = `DELETE FROM hospital_registration WHERE h_registration_no = ?`
        await connection.query(q4, data, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result);
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}


module.exports = { getregister, postregister, updateregister, deleteregister }

