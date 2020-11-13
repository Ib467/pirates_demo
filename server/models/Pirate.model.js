const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    pirateName: {
        type: String,
        required: [
            true,
            'Please specify pirate name!'
        ],
        minlength: [
            3,
            'Please enter more than 3 characters.'
        ]
    },
    imageUrl: {
        type: String,
        required: [
            true,
            'Please enter pirate image url!'
        ],
        minlength: [
            5,
            'please enter more than 5 characters'
        ]
    },
    treasureChests: {
        type: Number,
        required: [
            true,
            'Please specify the number of treasure chests!'
        ]
    },
    pirateCatchPhrase: {
        type: String,
        required: [
            true,
            'Please specify a catch phrase.'
        ],
        minlength: [
            3,
            'please enter more than 3 characters.'
        ]
    },
    crewPosition: {
        type: String,
        required: [
            true,
            'Please choose crew position!'
        ],
        minlength: [
            5,
            'Please choose from the following options'
        ]
    },
    pegLeg: {
        type: Boolean,
        required: [
            true,
            'please specify if there is Peg Leg!'
        ]
    },
    eyePatch: {
        type: Boolean,
        required: [
            true,
            'please specify if there is eye patch!'
        ]
    },
    hookHand: {
        type: Boolean,
        required: [
            true,
            'please specify if there is hook hand!'
        ]
    }
}, {
timestamps: true
});

module.exports = mongoose.model('Pirate', PirateSchema)