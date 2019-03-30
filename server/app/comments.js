const express = require('express');

const createRouter = connection => {
    const router = express.Router();

    router.get('/', (req, res) => {
        if (req.query.news_id) {
            connection.query('SELECT * FROM `comments` WHERE news_id = ?', req.query.news_id, (error, results) => {
                if (error) {
                    return res.status(500).send({error: error.sqlMessage});
                }

                res.send(results);
            });
        } else {
            connection.query('SELECT * FROM `comments`', (error, results) => {
                if (error) {
                    return res.status(500).send({error: error.sqlMessage});
                }

                res.send(results);
            });
        }
    });



    return router;
};

module.exports = createRouter;
