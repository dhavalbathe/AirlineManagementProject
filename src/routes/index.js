const express = require('express');

const UserV1Route = require('./v1/index');

const router = express.Router();

router.use('/v1', UserV1Route);

module.exports = router;