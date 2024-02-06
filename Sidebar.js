// Sidebar.js
import React, { useState } from 'react';

const Sidebar = ({ initialMenuItems }) => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [filter, setFilter] = useState('');

  const addMenuItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  const filteredItems = menuItems.filter((item) =>
    new RegExp(filter, 'i').test(item)
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
