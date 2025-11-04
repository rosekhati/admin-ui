import React, { useState } from "react";

function PostCard({ id, userId, title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className="bg-white p-5 rounded-lg shadow-md flex flex-col justify-between text-center transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-pink-100 hover:border hover:border-gray-300">
    
      <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
      
      <p className="text-sm text-gray-700 mb-3">{body}</p>

      <button
        onClick={() => setClicked(true)}
        className={`px-3 py-2 rounded-md text-sm text-white transition-colors duration-200 
          ${clicked ? "bg-special-red2 hover:bg-red-700" : "bg-gray-400 hover:bg-gray-500" }`}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;

