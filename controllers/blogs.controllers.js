const Blog = require("../models/Blog");

exports.getBlogs = (req, res) => {
  Blog.fetchAll((blogs) => {
    res.render("index", {
      pageTitle: "Blog",
      path: "/blogs",
      blogs: blogs,
    });
  });
};

exports.getBlog = (req, res) => {
  const { id } = req.params;
  Blog.findById(id, (blog) => {
    const error = { message: "Not Found" };
    if (!blog) return res.render("error", { pageTitle: error.title, error });

    res.render("blog-detail", {
      pageTitle: blog.title,
      path: "/blogs",
      blog,
    });
  });
};
