const express = require('express');
const router = express.Router();

router.get('/:name',(req, res) => {
    res.render('users', {
        name: req.params.name,
        supplies: ['mop', 'broom','duster']
    })
    // res.send(`hello, express, ${req.params.name}`)
});

module.exports = router;