const API = import.meta.env.VITE_API_BASE || "http://localhost:4000/api";

export async function fetchPosts() {
  const res = await fetch(`${API}/posts`);
  return res.json();
}

export async function createPost(post) {
  const res = await fetch(`${API}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });
  return res.json();
}

export async function updatePost(id, data) {
  const res = await fetch(`${API}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API}/posts/${id}`, { method: 'DELETE' });
  return res.json();
}
