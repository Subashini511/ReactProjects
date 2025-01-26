import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count +1);
  };

  return (
    <div style={{ textAlign: 'center', margintop: '50px' }}>
      <h1>React Button Example </h1>
      <p>You've clicked the button {count} times.</p>
      <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontsize: '16px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
      >
        Click Me!
      </button>

    </div>
  );
}

export default App;
