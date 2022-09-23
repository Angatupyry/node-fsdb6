const express = require("express");
const { get, create, actualizar } = require("../controllers/tareas");
const { verifyToken } = require("../middleware/jw-validate");

const router = express.Router();

router.get("/", verifyToken, get);

router.post("/", verifyToken, create);

router.put("/:id", actualizar);

module.exports = router;
