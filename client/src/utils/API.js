import axios from "axios";

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = "&key=AIzaSyAE2CIuMnHiuUN7XLs9fRiATGN1gD-t0LY";

export default {
  // testing 
  searchApartments: (address, city, state) => axios.get(`${BASEURL},+${address}, ${city},+${state},+${APIKEY}`),

  // Gets all books
  getApartments: function() {
    return axios.get("/api/apartments");
  },
  // Gets the book with the given id
  getApartment: function(id) {
    return axios.get("/api/apartments/" + id);
  },
  // Deletes the apartment with the given id
  deleteApartment: function(id) {
    return axios.delete("/api/apartments/" + id);
  },
  // Saves a apartment to the database
  saveApartment: function(apartmentData) {
    return axios.post("/api/apartments", apartmentData);
  }
};
