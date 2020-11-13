const Pirate = require('../models/Pirate.model');

module.exports.getAll = function(req, res) {
    Pirate.find()
    .then(pirates => res.json(pirates))
    .catch(err => res.json(err));
}

module.exports.create = (req, res) => {
    Pirate.create(req.body)
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err));
}


module.exports.getOne = (req, res) => {
    Pirate.findById(req.params.id)
    .then(pirate => res.json(pirate))
    .catch(err => res.json(err));
}

module.exports.update = (req, res) => {
    Pirate.findByIdAndUpdate(
        req.params.id,
        // req.body,
        {
            pirateName: req.body.pirateName,
            imageUrl: req.body.imageUrl,
            treasureChests: req.body.treasureChests,
            pirateCatchPhrase: req.body.pirateCatchPhrase,
            crewPosition: req.body.crewPosition,
            pegLeg: req.body.pegLeg,
            eyePatch: req.body.eyePatch,
            hookHand: req.body.hookHand,
        },
        {
            new: true,
            runValidators: true
        }
    )
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err));
}


module.exports.delete = (req, res) => {
    Pirate.findByIdAndDelete(req.params.id)
    .then(() => res.json({message: 'success'}))
    .catch(err => res.json(err))
}