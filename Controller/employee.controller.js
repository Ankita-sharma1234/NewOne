const connection = require("../Model/db_connect")

const getemployee = async (req, res) => {
    try {
        const q1 = "SELECT * FROM hospital_employee"
        await connection.query(q1, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const postemployee = async (req, res) => {
    try {
        const data = req.body;
        const q2 = " INSERT INTO hospital_employee SET ? "
        await connection.query(q2, data, (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const updateemployee = (req, res) => {

    let userData = [req.body.h_registration_no, req.body.employee_Name, req.body.employee_password, req.body.employee_DOB, req.body.employee_DOJ, req.body.employee_salary, req.body.employee_photos, req.body.employee_aadhar_no, req.body.employee_experience, req.body.employee_contact_no, req.body.employee_email, req.body.employee_gender, req.params.employee_id]
    let sqlQuery = `UPDATE hospital_employee SET  h_registration_no= ?,employee_Name = ?,employee_password = ?,employee_DOB = ?,employee_DOJ = ?,employee_salary = ?,employee_photos = ?,employee_aadhar_no = ?,employee_experience = ?,employee_contact_no = ?,employee_email = ?,employee_gender = ? where employee_id = ? `;
    connection.query(sqlQuery, userData, (err, result) => {
        if (err) {
            console.log(err.sqlMessage);
        } else {
            res.send(result);
        }
    })


}

const deletemployee = async (req, res) => {
    try {
        const data = req.body.employee_id;
        const q4 = `DELETE FROM hospital_employee WHERE employee_id = ?`
        await connection.query(q4, [data], (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result);
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}


module.exports = { getemployee, postemployee, updateemployee, deletemployee }


