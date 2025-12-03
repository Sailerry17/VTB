const express = require('express');
const router = express.Router();
const Donasi = require('../models/Donasi');
const auth = require('../middlewares/auth');

// Create donation (public)
router.post('/', async (req,res)=> {
  const { nama, jumlah } = req.body;
  if(!jumlah) return res.status(400).json({ error: 'jumlah required' });
  const d = new Donasi({ nama, jumlah });
  await d.save();
  res.json(d);
});

// List donations (public)
router.get('/', async (req,res)=> {
  const list = await Donasi.find().sort({ tanggal: -1 });
  res.json(list);
});

module.exports = router;
