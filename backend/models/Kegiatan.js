const mongoose = require('mongoose');
const KegiatanSchema = new mongoose.Schema({
  judul: String,
  deskripsi: String,
  tanggal: Date,
  lokasi: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Kegiatan', KegiatanSchema);
