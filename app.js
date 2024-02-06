// App.js
import React from 'react';
import Sidebar from './Sidebar';

const initialMenuItems = ['Item 1', 'Item 2', 'Item 3'];

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Sidebar initialMenuItems={initialMenuItems} />
    </div>
  );
};

export default App;
