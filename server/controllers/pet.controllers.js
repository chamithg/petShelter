const Pet = require("../models/Pet.models");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .sort({ type: 1 })
    .then((allPets) => {
      res.json({ results: allPets });
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports.CreateNewPet = (req, res) => {
  Pet.create(req.body)
    .then((newPet) => {
      res.json({ results: newPet });
    })
    .catch((err) => {
      res.json(err);
    });
};
module.exports.findOnePet = (req, res) => {
  Pet.findOne({ _id: req.params.id })
    .then((foundPet) => {
      res.json({ results: foundPet });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updateOnePet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPet) => {
      res.json({ results: updatedPet });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.deleteOnePet = (req, res) => {
  Pet.findOneAndRemove({ _id: req.params.id })
    .then((deletedPet) => {
      res.json({ results: deletedPet });
    })
    .catch((err) => {
      res.json(err);
    });
};
