import express from "express";

const router = express.Router();

// Example route: GET /api/admin/test
router.get("/test", (req, res) => {
  res.json({ message: "Admin route is working!" });
});

export default router;
