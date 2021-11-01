import './App.css';
import React from 'react';
import useInput from './hooks/useInput';
import Hover from './components/Hover';
import List from './components/List';

function App() {
  const Username = useInput('');
  const Password = useInput('');

  return (
    <div>
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
