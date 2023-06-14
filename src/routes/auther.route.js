'use strict';
const express = require('express');
const router = express.Router();
const { autherModel,booksModel } = require('../models/index.js');


router.get('/auther', getAuther);
router.get('/auther/:id', getAutherById);
router.post('/auther', createAuther);
router.put('/auther/:id', updateAuther);
router.delete('/auther/:id', deleteAuther);
router.get('/autherbooks/:id', getAuthersBooks);


async function getAuther(req, res) {
    let autherList = await autherModel.read();
    res.status(200).json(autherList);
}

async function getAutherById(req, res) {
    let id = parseInt(req.params.id);
    let auther = await autherModel.read(id);
    res.status(200).json(auther);
}

async function createAuther(req, res) {
    let autherInfo = req.body;
    let auther = await autherModel.add(autherInfo);
    res.status(201).json(auther);
}

async function updateAuther(req, res) {
    let id = parseInt(req.params.id);
    let autherInfo = req.body;
    // let auther = await autherModel.findOne({ where: { id: id } });
    let updatedAuther = await autherModel.update(id,autherInfo);
    res.status(201).json(updatedAuther);
}

async function deleteAuther(req, res) {
    let id = parseInt(req.params.id);
    let deletedAuther = await autherModel.delete(id);
    res.status(204).json(deletedAuther);
}

async function getAuthersBooks(req, res) {
    let id = parseInt(req.params.id);
    let authersBooks = await booksModel.getAuthersBooks(id);
    res.status(200).json(authersBooks);
}

module.exports = router;