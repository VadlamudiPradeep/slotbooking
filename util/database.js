let Sequelize = require('sequelize');
let dotenv = require('dotenv');
dotenv.config()


let sequelize = new Sequelize(process.env.NAME , process.env.USERNAME, process.env.PASSWORD,{
    dialect:'mysql',
    host:'localhost'
});
module.exports = sequelize;
