import mongoose from 'mongoose';
import {BLogSchema} from '../models/blogModel.js'
const blog = mongoose.model('blogs', BLogSchema);
export const  addNewBlog = (req,res) => {
  let newBlog = new blog(req.body);
  newBlog.save((err, blog) => {
    if (err) {
      res.send(err)
    }
    res.json(blog)
  })
}

export const getBlogs = (req,res) => {
  blog.find({}, (err, blog) => {
    if (err) {
      res.send(err)
    }
    res.json(blog)
  })
}

export const getBlogWithId = (req,res) => {
  blog.findById(req.params.blogID, (err, blog) => {
    if (err) {
      res.send(err)
    }
    res.json(blog)
  })
}

export const updateBlog = (req,res) => {
  blog.findOneAndUpdate({ _id: req.params.blogID }, req.body, { new: true, useFindAndModify: false }, (err, blog) => {
    if (err) {
      res.send(err)
    }
    res.json(blog)
  })
}

export const deleteBlog = (req,res) => {
  blog.deleteOne({ _id: req.params.blogID }, (err, blog) => {
    if (err) {
      res.send(err)
    }
    res.json({message: "successfully deleted blog"})
    })
}
