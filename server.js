const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const snacksController = require('./controllers/snacks');
require('dotenv').config();

const PORT = 3000;

mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
});

db = mongoose.connection;

db.on('error', (err) =>
    console.log(`${err.message} is mongodb not connected?`)
    );
db.on('connected', () => console.log('MONGO is connected ;) !'));
db.on('disconnected', () => console.log('MONGO is disconnected ;) !'));

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use('/snacks', snacksController);

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
