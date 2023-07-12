import React, { useEffect, useState } from 'react';

const App = () => {
  const [filteredData, setFilteredData] = useState('');
  const [data, setData] = useState([
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Kiwi',
    'Peach',
    'Pear',
    'Cherry',
    'Lemon',
    'Pomegranate',
    'Raspberry',
    'Mandarin',
    'Coconut',
    'Avocado',
    'Guava',
    'Apricot',
    'Fig',
    'Plum',
    'Lychee',
    'Cantaloupe',
    'Passionfruit',
    'Dragonfruit',
    'Papaya',
    'Persimmon',
    'Clementine',
  ]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const updateData = data.filter((item) => item.toLowerCase().includes(filteredData.toLowerCase()));
    setFilteredItems(updateData);
  }, [data, filteredData]);

  const handleInputChange = (e) => {
    setFilteredData(e.target.value);
  };

  return (
    <div className='main'>
      <h1>Fruit Filter</h1>
      <input
        type='text'
        name='search'
        id='search'
        placeholder='Search Here...'
        value={filteredData}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default App;
