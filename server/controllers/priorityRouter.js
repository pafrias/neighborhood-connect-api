const router = require('express').Router();
const {getAll, getOne} = require('../model/Types');

router.get('/', (req, res) => {
  getAll((err, payload) => {
    if (err) {
      res.send(400);
    } else {
      res.send(payload);
    }
  })
});

router.get('/:typeId', (req, res) => {
  getOne((err, payload) => {
    if (err) {
      res.send(400);
    } else {
      res.send(payload);
    }
  })
});

module.exports = router;
