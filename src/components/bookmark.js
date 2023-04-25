import React, { useState } from "react";
//import "./Bookmarks.css";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);

  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(updatedBookmarks);
  };

  return (
    <div >
      <h2>Bookmarks</h2>
      <div>
        {bookmarks.length === 0 ? (
          <p>No bookmarks yet</p>
        ) : (
          bookmarks.map((bookmark) => (
            <div className="bookmark" key={bookmark.id}>
              <img src={bookmark.url} alt={bookmark.alt} />
              <button onClick={() => removeBookmark(bookmark.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Bookmarks;