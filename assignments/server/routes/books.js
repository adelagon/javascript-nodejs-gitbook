var models = require('../models');
var express = require('express');
var router = express.Router();

// READ
router.get("/", async function(req, res, next) {
    try {
        let Books = await models.Books.findAll();
        res.json(Books);
    } catch (e) {
        next(e);
    }
});

router.get("/:id", async function(req, res, next) {
    try {
        let book = await models.Books.findOne({"where": { "id": req.params.id }});
        if (!book) {
            return res.status(404).send("Not Found");
        }
        res.json(book);
    } catch (e) {
        next(e);
    }
});

// CREATE
router.put("/", async function(req, res, next) {
    try {
        let author = await models.Authors.findOne({"where": { "id": req.body.author_id }});
        if (!author) {
            return res.status(404).send("Provided author_id Not Found");
        }
        var book = models.Books.build({
            "title": req.body.title,
            "author_id": req.body.author_id,
            "copyright": req.body.copyright
        });
        await book.save();
        res.json(book);
    } catch (e) {
        next(e);
    }
});

// UPDATE
router.post("/:id", async function(req, res, next) {
    try {
        let author = await models.Authors.findOne({"where": { "id": req.body.author_id }});
        if (!author) {
            return res.status(404).send("Provided author_id Not Found");
        }
        var book = await models.Books.findOne({"where": { "id": req.params.id }});
        if (!book) {
            return res.status(404).send("Not Found");
        }
        book.title = req.body.title;
        book.author_id = req.body.author_id;
        book.copyright = req.body.copyright;
        await book.save();
        res.json(book);
    } catch (e) {
        next (e);
    }
});

// DELETE
router.delete("/:id", async function(req, res, next) {
    try {
        var book = await models.Books.findOne({"where": { "id": req.params.id }});
        if (!book) {
            return res.status(404).send("Not Found");
        }
        await book.destroy();
        res.json("success");
    } catch (e) {
        next (e);
    }
});
module.exports = router;
