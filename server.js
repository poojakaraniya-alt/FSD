// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Define schema and model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});
const Post = mongoose.model("Post", postSchema);

// Routes
app.get("/api/posts", async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post("/api/posts", async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.json(newPost);
});

app.put("/api/posts/:id", async (req, res) => {
  const { title, content } = req.body;
  const updated = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
  res.json(updated);
});

app.delete("/api/posts/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ message: "Post deleted" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
