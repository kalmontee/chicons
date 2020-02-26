import axios from "axios";

const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default {
  // testing 
  // searchApartments: (address, city, state) => axios.get(`${BASEURL},+${address}, ${city},+${state},+${APIKEY}`),

  // Gets all books
  getApartments: function () {
    return axios.get("/api/apartments");
  },
  // Gets the book with the given id
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
favedApartments: function() {
  return axios.get("/api/apartments/test")
}

  searchApartments(search) {
    return axios.get("/api/apartments/google/" + search)
  },

  // firebaseKey(apiKey) {
  //   console.log(axios.get("/api/apartments/firebase"));

  //   return axios.get("/api/apartments/firebase/", apiKey);
  // }

};

// 234 52nd St West New York, New Jersey 
