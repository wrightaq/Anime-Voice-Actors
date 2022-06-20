const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const animeSchema = new mongoose.Schema(
  {
    title: String,
    character: String,
    actor: String,
    watched: Boolean,
  }
);

const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;