////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const Snack = require('../models/snack');
const router = express.Router();
const sweet = require('../models/sweetSeed')
const salt = require('../models/saltSeed')
const pak = require('../models/pakSeed')
const allergy = require('../models/allergySeed')
const party = require('../models/partySeed')
//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
    Snack.find({}, (err, foundSnacks) => {
        res.render('index.ejs', {
            snacks: foundSnacks,
        });
    });
});
//////////////////////// NEW ////////////////////////
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//////////////////////// DELETE ////////////////////////
router.delete('/:id', (req, res) => {
    Snack.findByIdAndRemove(req.params.id, () => {
        res.redirect('/snacks');
    })
})

//////////////////////// UPDATE ////////////////////////
router.put('/:id', (req, res) => {
    Snack.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/snacks');
    });
});

//////////////////////// CREATE ////////////////////////
router.post('/', (req, res) => {
    Snack.create(req.body, (err, createdSnack) => {
        res.redirect('/snacks');
    });
});
//////////////////////// EDIT ////////////////////////
router.get('/:id/edit', (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        res.render('snacks/edit.ejs', {
            snack: foundSnack,
        });
     });
});

//////////////////////// SHOW ////////////////////////////
router.get('/:id', (req, res) => {
    Snack.findById(req.params.id, (err, foundSnack) => {
        res.render('snacks/show.ejs', {
            snack: foundSnack,
        });
    });
});
module.exports = router;
