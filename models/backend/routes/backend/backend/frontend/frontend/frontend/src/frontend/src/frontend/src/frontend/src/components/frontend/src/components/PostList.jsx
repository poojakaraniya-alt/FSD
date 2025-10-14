import React from "react";

export default function PostList({ posts, onDelete, onEdit }) {
  return (
    <div className="list">
      {posts.map(p => (
        <div key={p._id} className="card post">
          <h3>{p.title}</h3>
          <p>{p.body}</p>
          <small>By {p.author} | Roll {p.rollNumber ?? '-'}</small>
          <div>
            <button onClick={() => onEdit(p)}>Edit</button>
            <button onClick={() => onDelete(p._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
