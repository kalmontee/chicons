import axios from "axios";

export default {
  // testing 
  searchApartments: function (latitude, longitude) {
    return axios(`https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?compCount=20&latitude=${latitude}&longitude=${longitude}&rapidapi-key=ff2af2325emsha371561b7ddfacdp1148eajsnd3bfbea4cf52`);
  },
  // Gets all apartments
  getApartments: function () {
    return axios.get("/api/apartments");
  },
  // Gets the apartment with the given id
  getApartment: function (id) {
    return axios.get("/api/apartments/" + id);
  },
  // Deletes the apartment with the given id
  deleteApartment: function (id) {
    return axios.delete("/api/apartments/" + id);
  },
  // Saves a apartment to the database
  saveApartment: function (apartmentData) {
    return axios.post("/api/apartments", apartmentData);
  },
  setSavedApartments: function (id) {
    return axios.put("/api/apartments/" + id);
  },
  favedApartments: function () {
    return axios.get("/api/apartments/test")
  },
  googleMaps(search) {
    return axios.get("/api/apartments/google/" + search)
  },

  googlePlaces(search) {
    return axios.get("/api/apartments/googlePlaces/" + search)
  }
};