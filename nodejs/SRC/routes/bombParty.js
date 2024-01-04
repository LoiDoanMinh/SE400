var express = require('express');
const router = express.Router();

const bombPartyController = require('../app/controllers/bombpartyController');
// router.post('/store', detailController.store);
router.get('/:id', bombPartyController.JoinRoom)
;
// router.put('/:id', bombPartyController.update);
// router.delete('/:id', detailController.delete);
// router.get('/:id/edit', detailController.edit);
router.get('/', bombPartyController.show);

module.exports = router;
