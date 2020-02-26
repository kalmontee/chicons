const db = require("../models");
const axios = require("axios");

require("dotenv").config();

const BASEURL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY;

const FIREBASE = process.env.REACT_APP_FIREBASE_API_KEY;

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Apartment
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
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
  update: function (req, res) {
    db.Apartment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
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

  // firebase(req, res) {
  //   axios.get(`${FIREBASE}`)
  //     .then(apiKey => {
  //       res.json(apiKey)
  //     })
  //     .catch(err = res.status(422).json(err));
  // }
};