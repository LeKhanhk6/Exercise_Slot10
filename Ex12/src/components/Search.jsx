import { useState } from 'react';

const SearchFilter = () => {

  const initialItems = [
    'Khanh', 'Vy', 'Huy', 'Hoang', 'Game', 'Player'
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter</h2>
      
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul style={{listStyle: 'none'}}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        ) : (
          <li>No items match your search.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;