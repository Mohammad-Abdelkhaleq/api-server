"use strict";
const Auther = (sequelize, DataTypes) =>
    sequelize.define("Auther", {
        // autherId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        auhterName: { type: DataTypes.STRING, allowNull: false },
    });
    module.exports = Auther;