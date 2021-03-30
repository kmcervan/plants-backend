const router = require('express').Router();

const User = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    User.get()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => res.status(500).send(error));
})

module.exports = router;