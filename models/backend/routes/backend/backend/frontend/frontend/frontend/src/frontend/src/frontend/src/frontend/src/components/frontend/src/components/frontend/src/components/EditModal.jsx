import React, { useState } from "react";

export default function EditModal({ post, onSave, onClose }) {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [author, setAuthor] = useState(post.author);
  const [rollNumber, setRollNumber] = useState(post.rollNumber);

  const save = () => onSave(post._id, { title, body, author, rollNumber });

  return (
    <div className="modal">
      <div className="modal-content card">
        <h2>Edit Post</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
        <input value={author} onChange={e => setAuthor(e.target.value)} />
        <input type="number" value={rollNumber} onChange={e => setRollNumber(e.target.value)} />
        <div>
          <button onClick={save}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
