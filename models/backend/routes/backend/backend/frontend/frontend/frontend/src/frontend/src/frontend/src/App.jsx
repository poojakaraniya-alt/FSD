import React, { useEffect, useState } from "react";
import { fetchPosts, createPost, updatePost, deletePost } from "./api";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import EditModal from "./components/EditModal";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(null);

  const loadPosts = async () => {
    const data = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => { loadPosts(); }, []);

  const handleCreate = async (post) => {
    const created = await createPost(post);
    setPosts([created, ...posts]);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(p => p._id !== id));
  };

  const handleUpdate = async (id, data) => {
    const updated = await updatePost(id, data);
    setPosts(posts.map(p => (p._id === id ? updated : p)));
    setEditing(null);
  };

  return (
    <div className="container">
      <h1>Blog Manager</h1>
      <PostForm onCreate={handleCreate} />
      <PostList posts={posts} onEdit={setEditing} onDelete={handleDelete} />
      {editing && <EditModal post={editing} onSave={handleUpdate} onClose={() => setEditing(null)} />}
    </div>
  );
}
