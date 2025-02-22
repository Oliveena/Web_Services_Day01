// imports required for everything to work
import airports from "../controllers/airports.controller.js";
import express from "express";

// creating a router
const router = express.Router(); 

// defining necessary routes
router.post("/", airports.create);
router.get("/", airports.getAll);
router.get("/:code", airports.findByCode);
router.put("/:code", airports.updateByCode);
router.delete("/:code", airports.remove);
router.delete("/", airports.removeAll);

// exporting the routes we just created 
export default router;
