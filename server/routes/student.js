import express from "express";

const router = express.Router();

// Example route: GET /api/student/test
router.get("/test", (req, res) => {
  res.json({ message: "Student route is working!" });
});

export default router;
