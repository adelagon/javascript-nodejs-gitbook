var models = require('../models');
var express = require('express');
var router = express.Router();

// READ
router.get("/", async function(req, res, next) {
    try {
        let authors = await models.Authors.findAll();
        res.json(authors);
    } catch (e) {
        next(e);
    }
});

router.get("/:id", async function(req, res, next) {
    try {
        let author = await models.Authors.findOne({"where": { "id": req.params.id }});
        if (!author) {
            return res.status(404).send("Not Found");
        }
        res.json(author);
    } catch (e) {
        next(e);
    }
});

// CREATE
router.put("/", async function(req, res, next) {
    try {
        var author = models.Authors.build({
            "first_name": req.body.first_name,
            "last_name": req.body.last_name
        });
        await author.save();
        res.json(author);
    } catch (e) {
        next(e);
    }
});

// UPDATE
router.post("/:id", async function(req, res, next) {
    try {
        var author = await models.Authors.findOne({"where": { "id": req.params.id }});
        if (!author) {
            return res.status(404).send("Not Found");
        }
        author.first_name = req.body.first_name;
        author.last_name = req.body.last_name;
        await author.save();
        res.json(author);
    } catch (e) {
        next (e);
    }
});

// DELETE
router.delete("/:id", async function(req, res, next) {
    try {
        var author = await models.Authors.findOne({"where": { "id": req.params.id }});
        if (!author) {
            return res.status(404).send("Not Found");
        }
        await author.destroy();
        res.json("success");
    } catch (e) {
        next (e);
    }
});
module.exports = router;
