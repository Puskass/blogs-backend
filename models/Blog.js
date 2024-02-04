const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const pathToJSON = path.join(__dirname, "..", "data", "blogs.json");

const getBlogFromFile = (cb) => {
  fs.readFile(pathToJSON, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Blog {
    constructor(title, description){
        this.id = v4(),
        this.title = title,
        this.description = description,
        this.timeCreated = new Date()
    }
    save() {
        getBlogFromFile((blogs) => {
            blogs.push(this)
            fs.writeFile(pathToJSON, JSON.stringify(blogs), (err) => {
                console.log(err)
            })
        })
    }
    static fetchAll(cb) {
        getBlogFromFile(cb)
    }

    static findById(id, cb) {
        getBlogFromFile((blogs) => {
            const blog = blogs.find(blog => blog.id === id)
            cb(blog)
        })
    }
}