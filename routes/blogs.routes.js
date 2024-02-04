const express = require("express")
const { getBlogs, getBlog } = require("../controllers/blogs.controllers")

const router = express.Router()

router.get("/", (req, res) => res.redirect("/blogs"))

router.get("/blogs", getBlogs)

router.get("/blogs/:id", getBlog)

module.exports = router