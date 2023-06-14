'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require("sequelize");
const food = require('./food.js');
const clothes = require('./clothes.js');
const autherSchema = require('./auther.js');
const booksSchema = require('./books.js');
const Collection = require('../library/collection.js');
const POSTGRES_URI = process.env.NODE_ENV === "test" ? "sqlite::memory:" : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === "production" ?
    {
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    } :
    {}

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);
// let sequelize = new Sequelize(POSTGRES_URI, {});//if we don't have production or testing we can send {}

let autherTable = autherSchema(sequelize, DataTypes);
let booksTable = booksSchema(sequelize, DataTypes);

autherTable.hasMany(booksTable, { foreignKey: 'id', sourceKey: 'id' });
booksTable.belongsTo(autherTable, { foreignKey: 'id', targetKey: 'id' });

// i am now going to create the collection class to perform the CRUD operations on the database

const autherCollection = new Collection(autherTable);
const booksCollection = new Collection(booksTable);

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    Clothes: clothes(sequelize, DataTypes),
    autherModel: autherCollection,
    booksModel: booksCollection,
}