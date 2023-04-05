let mysql = require("mysql");
let connection = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    port: "3306",
    database: "new_hospital_management"
});
connection.connect((error) => {
    if (error) {
        console.log(error.sqlMessage);
    }
    else {
        console.log("connection...")
    }
})
module.exports = connection;  