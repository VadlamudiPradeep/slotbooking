const express = require('express');
const app = express();
const dotenv = require('dotenv');

// get config vars
dotenv.config();


const sequelize = require('./util/database');

const slotBookingRouter = require('./routes/slotBookingRoutes');

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user' , slotBookingRouter)


sequelize.sync()
.then((response)=>{
   
    app.listen((4000) , console.log('port in 4000') )
})
.catch((err)=>{
    console.log(err)
})



