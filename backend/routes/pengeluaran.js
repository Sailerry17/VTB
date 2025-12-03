const express = require('express');
const router = express.Router();
const Pengeluaran = require('../models/Pengeluaran');
const auth = require('../middlewares/auth');

// Add expense (admin)
router.post('/', auth, async (req,res) => {
  const { note, amount } = req.body;
  if(!amount) return res.status(400).json({ error: 'amount required' });
  const p = new Pengeluaran({ note, amount });
  await p.save();
  res.json(p);
});

// List expenses (public)
router.get('/', async (req,res) => {
  const list = await Pengeluaran.find().sort({ tanggal: -1 });
  res.json(list);
});

module.exports = router;
