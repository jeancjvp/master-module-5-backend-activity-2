const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts.controller');

// Posts Routes
router.get('/api/posts', posts.list);
router.get('/api/posts/:id', posts.detail);
router.post('/api/posts', posts.create);
router.patch('/api/posts/:id', posts.update);
router.delete('/api/posts/:id', posts.delete);

module.exports = router;