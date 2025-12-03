const mongoose = require('mongoose');
const PengeluaranSchema = new mongoose.Schema({
  note: String,
  amount: { type: Number, required: true },
  tanggal: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Pengeluaran', PengeluaranSchema);
