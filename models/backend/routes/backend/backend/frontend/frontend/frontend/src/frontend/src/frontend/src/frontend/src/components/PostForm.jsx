import React, { useState } from "react";

export default function PostForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !body) return alert("Title and body required");
    onCreate({ title, body, author, rollNumber: Number(rollNumber) });
    setTitle(""); setBody(""); setAuthor(""); setRollNumber("");
  };

  return (
    <form className="card form" onSubmit={submit}>
      <h2>New Post</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
      <input placeholder="Roll Number (1-20)" type="number" value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  );
}
