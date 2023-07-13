let Sequelize = require('sequelize');

let sequelize  = require('../util/database');

let slotBooking = sequelize.define('slotbooking' , {
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false ,
        primaryKey:true
    },
    date:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    startTime:{
        type:Sequelize.STRING,
        allowNull:false
    },
    endTime:{
        type:Sequelize.STRING,
        allowNull:false,
    }
});

module.exports = slotBooking;