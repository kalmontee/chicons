const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const apartmentSchema = new Schema({
    image: { type: String, required: true },
    address: { type: String, required: true },
    bedroom: { type: String, required: true },
    description: { type: String, required: true },
    phonenumber: { type: String, required: true },
    id: { type: String, required: true, unique: true },

});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;

