require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./models/Post');

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await Post.deleteMany();

  const posts = [];
  for (let i = 1; i <= 20; i++) {
    posts.push({
      title: `Sample Post ${i}`,
      body: `This is a blog post body for roll number ${i}.`,
      author: `Student ${i}`,
      rollNumber: i
    });
  }

  await Post.insertMany(posts);
  console.log('Inserted 20 sample posts.');
  process.exit(0);
})();
