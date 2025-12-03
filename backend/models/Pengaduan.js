const mongoose = require('mongoose');
const PengaduanSchema = new mongoose.Schema({
  nama: String,
  pesan: { type: String, required: true },
  tanggal: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Pengaduan', PengaduanSchema);
