const express = require("express");
const { NotesController } = require("../controllers");

const router = express.Router();
const controller = new NotesController();

router.get("", controller.getNotes);
router.get("/:id", controller.getNote);
router.post("", controller.createNote);
router.put("/:id", controller.updateNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;
