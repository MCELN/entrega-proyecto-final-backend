const { Router } = require('express');

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.render('chat',
            {
                style: 'home.css'
            });
    } catch (error) {
        res.status(500).json({ status: 'error', error: 'Internal error' });
    }
})

module.exports = router;