var express = require('express');
const router = express.Router();

const HarvestFestivalController = require('../app/controllers/HarvestFestivalController');
router.get('/GetWord', HarvestFestivalController.GetWord);
router.post('/edit', HarvestFestivalController.Save1);
router.get('/:id', HarvestFestivalController.JoinGame);
router.get('/', HarvestFestivalController.JoinRoom);


module.exports = router;
