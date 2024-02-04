const express = require("express");

const router = express.Router();

const { getAddBlog, postAddBlog } = require("../controllers/admin.controllers")

router.get("/admin/add-blog", getAddBlog);

router.post("/admin/add-blog", postAddBlog);

module.exports = router;
