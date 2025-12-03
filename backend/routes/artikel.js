const express = require('express');
const router = express.Router();
const Artikel = require('../models/Artikel');
const auth = require('../middlewares/auth');

router.post('/', auth, async (req,res) => {
  const a = new Artikel(req.body);
  await a.save();
  res.json(a);
});
router.get('/', async (req,res) => {
  const list = await Artikel.find().sort({ createdAt: -1 });
  res.json(list);
});
router.delete('/:id', auth, async (req,res) => {
  await Artikel.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});
module.exports = router;
