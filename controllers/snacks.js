////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const Snack = require('../models/snack');
const router = express.Router();
const allSnacks = require('../models/allSnacks')

//                      ROUTES
////////////////////////////////////////////////////////////
////////////////////// SEED ROUTE///////////////////////////////////
router.get('/seed', (req, res) => {
	Snack.deleteMany({}, (error, allSnacks) => {});

	Snack.create(allSnacks, (error, data) => {
		res.redirect('/snacks');
	});
});
////////////////////////INDEX ////////////////////////
router.get('/', (req, res) => {
    Snack.find({}, (err, allSnacks) => {
        res.render('index.ejs', {
            snacks: allSnacks,
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
        res.redirect('/s');
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
router.get('/sweet', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('sweetViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
// Salty Snack Show route/////////
router.get('/salty', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('saltyViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
// Sweet & Salty Snack Route////
router.get('/sweet-&-salty', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('ssViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
// Partytime Snacks route///
router.get('/partytime', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('partyViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
// Protein Pak'd snacks /////
router.get('/protein-pakd', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('pakViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
// Allergy Friendly snacks route////
router.get('/allergy-friendly', (req, res) => {
    Snack.find({},(err, foundSnack) => {
        res.render('allergyViews/index.ejs', {
            snacks: foundSnack,
        });
    });
});
module.exports = router;
