const express = require('express');
const router = express.Router();
const Pengaduan = require('../models/Pengaduan');

// submit pengaduan (public)
router.post('/', async (req,res) => {
  const { nama, pesan } = req.body;
  if(!pesan) return res.status(400).json({ error: 'pesan required' });
  const p = new Pengaduan({ nama, pesan });
  await p.save();
  res.json(p);
});

// list pengaduan (admin would protect later)
router.get('/', async (req,res) => {
  const list = await Pengaduan.find().sort({ tanggal: -1 });
  res.json(list);
});

module.exports = router;
