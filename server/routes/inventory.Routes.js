const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");

router.get("/", inventoryController.getInventory);
router.post("/", inventoryController.addItem);
router.put("/:id", inventoryController.updateItem);
router.delete("/:id", inventoryController.deleteItem);

module.exports = router;
