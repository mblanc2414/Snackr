////////////////////////////////////////////////////////////
//                      REQUIRE DEPENDENCIES
////////////////////////////////////////////////////////////
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const snacksController = require('./controllers/snacks');
const { Router } = require('express');
require('dotenv').config();
////////////////////////////////////////////////////////////
//                      INITITALIZE EXPRESS & PORT
////////////////////////////////////////////////////////////
const PORT = 3000;
////////////////////////////////////////////////////////////
//                      SET UP DATEBASE
////////////////////////////////////////////////////////////
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});
db = mongoose.connection;
db.on('error', (err) =>
    console.log(`${err.message} is mongodb not connected?`)
    );
db.on('connected', () => console.log('MONGO is connected ;) !'));
db.on('disconnected', () => console.log('MONGO is disconnected ;) !'));
////////////////////////////////////////////////////////////
//                      MIDDLEWARE
////////////////////////////////////////////////////////////
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/snacks', snacksController);

////////////////////////////////////////////////////////////
//                      ROUTES >>>>>>>>>>IN Controllers
////////////////////////////////////////////////////////////
////////////////////////INDEX ////////////////////////
app.get('/snacks', (req, res) => {
    res.render('index.ejs');
});
////////////////////////////////////////////////////////////
//                      LISTEN FOR PORT
////////////////////////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
