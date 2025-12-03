const express = require('express');
const router = express.Router();
const Kegiatan = require('../models/Kegiatan');
const auth = require('../middlewares/auth');

// CRUD simple
router.post('/', auth, async (req,res) => {
  const k = new Kegiatan(req.body);
  await k.save();
  res.json(k);
});
router.get('/', async (req,res) => {
  const list = await Kegiatan.find().sort({ createdAt: -1 });
  res.json(list);
});
router.delete('/:id', auth, async (req,res) => {
  await Kegiatan.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});
module.exports = router;
