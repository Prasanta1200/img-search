import React, { useState } from "react";
import axios from "axios";
//import "./Search.css";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchImages = async (e) => {
    e.preventDefault();
    const accessKey = "TCsqvkPDa4JV3sQdSGbT74VWkhf-SZJBcg40Gnpo86Q";
    const url = `https://api.unsplash.com/photos/?client_id=${accessKey}&query=${query}&per_page=30`;
    try {
      const response = await axios.get(url);
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={searchImages}>
        <input
          type="text"
          placeholder="Search images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {results.map((result) => (
          <img
            key={result.id}
            src={result.urls.regular}
            alt={result.alt_description}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;