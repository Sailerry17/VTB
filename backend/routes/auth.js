const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register (one-time) - protect or run locally
router.post('/register', async (req, res) => {
  try{
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const a = new Admin({ username, password: hash });
    await a.save();
    res.json({ ok: true });
  }catch(e){ res.status(400).json({ error: e.message }); }
});

// Login
router.post('/login', async (req, res) => {
  try{
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if(!admin) return res.status(400).json({ error: 'User not found' });
    const match = await bcrypt.compare(password, admin.password);
    if(!match) return res.status(400).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET);
    res.json({ token });
  }catch(e){ res.status(500).json({ error: e.message }); }
});

module.exports = router;
