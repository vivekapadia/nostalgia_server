import express from "express";

const router = express.Router();

// http://localhost:5555/posts
router.get("/", (req, res) => {
	res.send("This works !");
});

export default router;
