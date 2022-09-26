const express = require("express");

const router = express.Router();

const { hola } = require("../controllers/hola");

router.get("/", hola);

module.exports = router;
