import express from "express";

import { getPosts } from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5555/posts
router.get("/", getPosts);

export default router;
