const path = require('path');
const router = require('express').Router();

module.exports = function (data) {
    // serves data
    router.get('/data', (req, res) => {
        res.json(data);
    });

    return router;
};
