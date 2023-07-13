let Sequelize = require('sequelize');
let dotenv = require('dotenv');
dotenv.config()
const NAME = process.env.NAME;
console.log(NAME)

let sequelize = new Sequelize('slotbooking' , 'root', '1qaz2wsx3edc',{
    dialect:'mysql',
    host:'localhost'
});
module.exports = sequelize;