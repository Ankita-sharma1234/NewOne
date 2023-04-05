const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const port = 5000;


const { ownerroute } = require("./Routes/owner.routes");
app.use('/', ownerroute)

const { registrationroute } = require("./Routes/registration.route");
app.use('/', registrationroute)

const { labsroute } = require("./Routes/labs.routes");
app.use('/', labsroute)

const { employeeroute } = require("./Routes/employee.routes");
app.use('/', employeeroute)

app.listen(port, () => {
    console.log(`server is running on ${port} port`)
})