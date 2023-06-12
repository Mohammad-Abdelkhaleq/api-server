const express = require('express')
const clothesRouter= express.Router();
const {Clothes}=require('../models/index.js');

clothesRouter.get('/clothes',getClothes);
clothesRouter.get('/clothes/:id',getClothesById);
clothesRouter.post('/clothes',createClothes);
clothesRouter.put('/clothes/:id',updateClothes);
clothesRouter.delete('/clothes/:id',deleteClothes);

async function getClothes(req,res){
    let clothesList=await Clothes.findAll();
    res.status(200).json(clothesList);

}
async function getClothesById(req,res){
    let id=parseInt(req.params.id);
    let clothes=await Clothes.findOne({where:{clothesId:id}});
    res.status(200).json(clothes);

}
async function createClothes(req,res){
    let clothesInfo=req.body;
    let clothes=await Clothes.create(clothesInfo);
    res.status(201).json(clothes);

}

async function updateClothes(req,res){
      let id=parseInt(req.params.id);
    let clothesInfo=req.body;
    let clothes=await Clothes.findOne({where:{clothesId:id}});
    let updatedClothes=await clothes.update(clothesInfo);
    res.status(201).json(updatedClothes);

}

async function deleteClothes(req,res){
    let id=parseInt(req.params.id);
    let deletedClothes=await Clothes.destroy({where:{clothesId:id}});
    res.status(204).json(deletedClothes);

}

module.exports=clothesRouter;