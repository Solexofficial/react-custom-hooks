import './App.css';
import React, { useState } from 'react';
import useInput from './hooks/useInput';
import Hover from './components/Hover';
import List from './components/List';
import useDebounce from './hooks/useDebounce';

function App() {
  const Username = useInput('');
  const Password = useInput('');

  const [value, setValue] = useState('');
  const debouncedCallback = useDebounce(search, 500);
  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos` + query)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  }

  const handleChange = e => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <div>
      <div>
        <input type='text' value={value} onChange={handleChange} />
      </div>
      {/* useInput */}
      <div style={{ margin: 50 }}>
        <input {...Username} type='text' placeholder='Username' />
        <input {...Password} type='password' placeholder='Password' />
        <button onClick={() => console.log(Username.value, Password.value)}>Click</button>
      </div>
      {/* useHover */}
      <Hover />
      <List />
    </div>
  );
}

export default App;
