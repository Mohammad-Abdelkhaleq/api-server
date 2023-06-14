'use strict'; 
const express = require('express');
const router = express.Router();
const { booksModel } = require('../models/index.js');

router.get('/books', getBooks);
router.get('/books/:id', getBooksById);
router.post('/books', createBooks);
router.put('/books/:id', updateBooks);
router.delete('/books/:id', deleteBooks);


async function getBooks(req, res) {
    let booksList = await booksModel.read();
    res.status(200).json(booksList);
}

async function getBooksById(req, res) {
    let id = parseInt(req.params.id);
    let books = await booksModel.read(id);
    res.status(200).json(books);
}

async function createBooks(req, res) {
    let booksInfo = req.body;
    let books = await booksModel.add(booksInfo);
    res.status(201).json(books);
}

async function updateBooks(req, res) { 
    let id = parseInt(req.params.id);
    let booksInfo = req.body;
    // let books = await booksModel.findOne({ where: { id: id } });
    let updatedBooks = await booksModel.update(booksInfo);
    res.status(201).json(updatedBooks);
}

async function deleteBooks(req, res) {
    let id = parseInt(req.params.id);
    let deletedBooks = await booksModel.delete(id);
    res.status(204).json(deletedBooks);
}

module.exports = router;