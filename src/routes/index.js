const express = require('express');
const router = express.Router();

// routes - rutas del serv
router.get('/', (req, res) => {
    res.render('index.html', { title: 'TC Music Website'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contact Page'});
});

module.exports = router;