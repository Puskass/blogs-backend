const Blog = require("../models/Blog");

exports.getAddBlog = (req, res) => {
  res.render("add-blog", {
    pageTitle: "Post New Blog",
    path: "/admin/add-blog",
  });
};

exports.postAddBlog = (req, res) => {
  const { title, description } = req.body;

  const blog = new Blog(title, description);
  blog.save();
  res.redirect("/blogs");
};

//   exports.getBlogs = (req, res) => {
//     Blog.fetchAll((blog) => {
//         res.render(())
//     })
//   }
