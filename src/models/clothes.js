"use strict";
const Clothes =(sequelize, DataTypes) =>
    sequelize.define("Clothes", {
        clothesId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        clothesName: { type: DataTypes.STRING, allowNull: false },
        clothesType: { type: DataTypes.STRING, allowNull: false },
    });

module.exports = Clothes;