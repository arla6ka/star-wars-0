import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://star-wars-1.vercel.app/api/search?query=${query}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for characters, planets, ships..."
        style={{ padding: '10px', fontSize: '16px', margin: '10px 0', width: '100%' }}
      />
      <button onClick={handleSearch} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Search
      </button>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <h3>{result.name}</h3>
            {result.climate && <p>Climate: {result.climate}</p>}
            {result.terrain && <p>Terrain: {result.terrain}</p>}
            {result.model && <p>Model: {result.model}</p>}
            {result.manufacturer && <p>Manufacturer: {result.manufacturer}</p>}
            {result.height && <p>Height: {result.height}</p>}
            {result.mass && <p>Mass: {result.mass}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
