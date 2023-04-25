import React, { useState } from "react";
import "./App.css";
import Search from "./components/search";
import Bookmarks from "./components/bookmark";

function App() {
  const [images, setImages] = useState([]);
  const [bookmarks,setBookmarks] = useState([])

  const addBookmark = (id, url, alt) => {
    const newBookmark = { id, url, alt };
    setBookmarks((bookmarks) => [...bookmarks, newBookmark]);
  };

  return (
    <div className="App">
      <Search setImages={setImages} addBookmark={addBookmark} />
      <Bookmarks />
      <div >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.urls.small} alt={image.alt_description} />
            <button
              onClick={() => addBookmark(image.id, image.urls.small, image.alt_description)}
            >
              Bookmark
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;