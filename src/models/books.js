"use strict";
const Books = (sequelize, DataTypes) =>
    sequelize.define("Books", {
        // bookId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        bookName: { type: DataTypes.STRING, allowNull: false },
        autherId: { type: DataTypes.INTEGER, allowNull: false },
    });
    module.exports = Books;