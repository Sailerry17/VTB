require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Connect DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB connected'))
.catch(err => { console.error(err); process.exit(1); });

// Models
const Admin = require('./models/Admin');
const Donasi = require('./models/Donasi');
const Pengeluaran = require('./models/Pengeluaran');
const Pengaduan = require('./models/Pengaduan');
const Kegiatan = require('./models/Kegiatan');
const Artikel = require('./models/Artikel');

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/donasi', require('./routes/donasi'));
app.use('/api/pengeluaran', require('./routes/pengeluaran'));
app.use('/api/pengaduan', require('./routes/pengaduan'));
app.use('/api/kegiatan', require('./routes/kegiatan'));
app.use('/api/artikel', require('./routes/artikel'));

// Health
app.get('/', (req, res) => res.send({ ok: true, app: 'Volunteer Tanggap Bencana API' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
