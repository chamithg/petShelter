const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "pet name is required"],
      minLength: [3, "Name should be at least 3 character long"],
    },
    type: {
      type: String,
      required: [true, "pet type required"],
      minLength: [3, "type should be at least 3 character long"],
    },
    desc: {
      type: String,
      required: [true, "pet description is required"],
      minLength: [3, "descriptions should be at least 3 character long"],
    },
    skill1: {
      type: String,
    },
    skill2: {
      type: String,
    },
    skill3: {
      type: String,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;
