const express = require('express');
const bodyParser = require('body-parser');
require("./models/patient");
const mongoose = require('mongoose');
const app = new express();

// //database
require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');
// Serving my static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const Patient = mongoose.model('Patient');

//Making database connection to covidStores
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })
    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
    });

app.get('/', (req, res) => {
    res.render('index', {});
});

app.post('/', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
});

app.get('*', (req, res) => {
    res.status(404).render('404', { page: '404' })
});

// Listening for requests: the server!
const port = (process.env.PORT || 3000);
app.listen(port, (error) => {
    console.log(`Listening on port ${port}`)
});