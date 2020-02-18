import axios from "axios";

export default {
  // Gets all books
  getApartments: function() {
    return axios.get("/api/apartments");
  },
  // Gets the book with the given id
  getApartment: function(id) {
    return axios.get("/api/apartments/" + id);
  },
  // Deletes the book with the given id
  deleteApartment: function(id) {
    return axios.delete("/api/apartments/" + id);
  },
  // Saves a book to the database
  saveApartment: function(bookData) {
    return axios.post("/api/apartments", apartmentData);
  }
};
