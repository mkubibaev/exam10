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

    router.post('/', (req, res) => {
        const newComment = req.body;

        if (!newComment.author) {
            newComment.author = 'Anonymous';
        }

        connection.query('INSERT INTO `comments` (`news_id`, `author`, `text`) VALUES (?, ?, ?)',
            [
                newComment.news_id,
                newComment.author,
                newComment.text,
            ],
            (error, results) => {
                if (error) {
                    return res.status(500).send({error: error.sqlMessage});
                }

                res.send({...newComment, id: results.insertId});
            });
    });

    router.delete('/:id', (req, res) => {
        connection.query('DELETE FROM `comments` WHERE `id` = ?', req.params.id, (error, results) => {
            if (error) {
                return res.status(500).send({error: error.sqlMessage});
            }

            res.send({message: 'Comment deleted!'});
        });
    });

    return router;
};

module.exports = createRouter;
