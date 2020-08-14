const mongoose = require('mongoose');

//Schema for patient
const patientSchema = new mongoose.Schema({  
    surName: {
        type: String,
        trim: true,
    },
    givenName: {
        type: String,
        trim: true,
    },
    dob: {
        type: String,
        trim: true,
    },
    residence: {
        type: String,
        trim: true,
    },
    occupation: {
        type: String,
        trim: true,
    },
    nationality: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Patient', patientSchema);