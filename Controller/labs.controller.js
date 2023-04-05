const connection = require("../Model/db_connect")

const getlabs = async (req, res) => {
    try {
        const q1 = "SELECT * FROM hospital_labs"
        await connection.query(q1, (err, result, fields) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const postlabs = async (req, res) => {
    try {
        const data = req.body;
        const q2 = " INSERT INTO hospital_labs SET ? "
        await connection.query(q2, data, (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage)
    }
}

const updatelabs = async (req, res) => {
    try {
        let userData = [req.body.lab_name, req.body.lab_type, req.body.lab_test, req.params.lab_id]
        let sqlQuery = "UPDATE hospital_labs set  lab_name=?, lab_type=?,lab_test=?  WHERE lab_id = ?";
        await connection.query(sqlQuery, userData, (err, result, fields) => {
            if (err) {
                console.log(err.sqlMessage);
            } res.send(result)
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}

const deletelabs = async (req, res) => {
    try {
        const data = req.params.lab_id;
        const q4 = `DELETE FROM hospital_labs WHERE lab_id = ?`
        await connection.query(q4, [data], (err, result) => {
            if (err) {
                res.send(err.sqlMessage);
            } res.send(result);
        })
    } catch (err) {
        res.send(err.sqlMessage);
    }
}


module.exports = { getlabs, postlabs, updatelabs, deletelabs }


