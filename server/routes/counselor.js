import express from "express";

const router = express.Router();

// Example route: GET /api/counselor/test
router.get("/test", (req, res) => {
  res.json({ message: "Counselor route is working!" });
});

export default router;
