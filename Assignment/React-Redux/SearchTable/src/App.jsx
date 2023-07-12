import React, { useEffect, useState } from 'react';
import { data } from './Data';

const App = () => {
  const [searchFilter, setSearchFilter] = useState('');
  const [tableData, setTableData] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((entry) =>
      entry.role.trim().toLowerCase().includes(searchFilter.trim().toLowerCase()) ||
      entry.name.trim().toLowerCase().includes(searchFilter.trim().toLowerCase())
    );
    setTableData(filteredData);
  }, [searchFilter]);

  return (
    <div className="main">
      <input
        type="text"
        placeholder="Search Table"
        value={searchFilter}
        onChange={(event) => setSearchFilter(event.target.value)}
      />
      <div className="mainTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((ele) => (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
