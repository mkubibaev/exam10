const express = require('express');
const path = require('path');
const multer = require('multer');
const nanoid = require('nanoid');
const config = require('../config');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});


const createRouter = connection => {
    const router = express.Router();

    router.get('/', (req, res) => {
        connection.query('SELECT `id`, `title`, `image`, `published_at` FROM `news`', (error, results) => {
            if (error) {
                return res.status(500).send({error: error.sqlMessage});
            }

            res.send(results);
        })
    });

    router.get('/:id', (req, res) => {
        connection.query('SELECT * FROM `news` WHERE `id` = ?', req.params.id, (error, results) => {
            if (error) {
                return res.status(500).send({error: error.sqlMessage});
            }

            if (results[0]) {
                res.send(results[0]);
            } else {
                res.status(404).send({error: 'News not found'});
            }
        });
    });


    return router;
};






module.exports = createRouter;
