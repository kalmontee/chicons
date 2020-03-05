const db = require("../models");
const axios = require("axios");

require("dotenv").config();

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const placeBaseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=";
const placeEndURL = "+point+of+interest&language=en";
const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Apartment
      .find(req.query)
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findFav: function(req, res) {
    console.log(req.body)
    db.Apartment.find({saved: true}).then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
    
  findById: function(req, res) {
    db.Apartment
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body)
    db.Apartment
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body)

    db.Apartment
      .findOneAndUpdate({ _id: req.params.id }, {saved: true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Apartment
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  google(req, res) {
    axios.get(`${BASEURL}${req.params.search}${APIKEY}`)
      .then(response => {
        res.json(response.data)
      })
      .catch(err => res.status(422).json(err));
  },

  googlePlaces(req, res) {
    axios.get(`${placeBaseURL}${req.params.search}${placeEndURL}${APIKEY}`)
      .then(response => res.json(response.data.results))
      .catch(err =>  res.status(422).json(err))
  }
};