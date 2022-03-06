import express from "express";

const router = express.Router();

router.get("/register", (req, res) => {
  res.send("hello from register api!");
});

export default router;
