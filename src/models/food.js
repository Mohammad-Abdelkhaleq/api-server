"use strict";
const Food = (sequelize, DataTypes) =>
    sequelize.define("Food", {
        foodId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        foodName: { type: DataTypes.STRING, allowNull: false },
        foodType: { type: DataTypes.STRING, allowNull: false },
    });
    module.exports = Food;