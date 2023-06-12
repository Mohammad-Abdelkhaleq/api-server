const express = require('express')
const foodRouter= express.Router();
const {Food}=require('../models/index.js');

foodRouter.get('/food',getFood);
foodRouter.get('/food/:id',getFoodById);
foodRouter.post('/food',createFood);
foodRouter.put('/food/:id',updateFood);
foodRouter.delete('/food/:id',deleteFood);

async function getFood(req,res){
    let foodList=await Food.findAll();
    res.status(200).json(foodList);

}
async function getFoodById(req,res){
    let id=req.params.id;
    let food=await Food.findOne({where:{foodId:id}});
    res.status(200).json(food);

}
async function createFood(req,res){
    let foodInfo=req.body;
    let food=await Food.create(foodInfo);
    res.status(201).json(food);

}

async function updateFood(req,res){
    let id=parseInt(req.params.id);
    let foodInfo=req.body;
    let food=await Food.findOne({where:{foodId:id}});
    let updatedFood=await food.update(foodInfo);
    res.status(201).json(updatedFood);

}

async function deleteFood(req,res){
    let id=parseInt(req.params.id);
    let deletedFood=await Food.destroy({where:{foodId:id}});
    res.status(204).json(deletedFood);

}

module.exports=foodRouter;