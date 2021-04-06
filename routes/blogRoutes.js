const express = require('express');
const Blog = require('../model/blog');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get("/", blogController.blog_index);
router.delete('/:id', blogController.blog_delete);
router.get('/detail/:id', blogController.blog_details);
router.post("/", blogController.blog_create_post);
router.get("/create", blogController.blog_create_get);

module.exports = router;