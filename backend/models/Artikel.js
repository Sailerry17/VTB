const mongoose = require('mongoose');
const ArtikelSchema = new mongoose.Schema({
  judul: String,
  konten: String,
  gambar: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Artikel', ArtikelSchema);
