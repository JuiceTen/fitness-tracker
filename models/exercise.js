const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema ({
    exercises: [{
     type: String,
     name: String,
     duration: Number,
     weight: Number,
     reps: Number,
     sets: Number,
     distance: Number
    }],
    day: {
     type: Date,
     default: Date.now()
    }
    
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;