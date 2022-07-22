const PetController = require("../controllers/pet.controllers");

module.exports = (app) => {
  app.get("/api/pets", PetController.findAllPets);
  app.post("/api/pets/new", PetController.CreateNewPet);
  app.get("/api/pets/:id", PetController.findOnePet);
  app.put("/api/pets/:id/update", PetController.updateOnePet);
  app.delete("/api/pets/:id/delete", PetController.deleteOnePet);
};
