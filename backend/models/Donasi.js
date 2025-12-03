const mongoose = require('mongoose');
const DonasiSchema = new mongoose.Schema({
  nama: String,
  jumlah: { type: Number, required: true },
  tanggal: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Donasi', DonasiSchema);
