import './App.css';
import React from 'react';
import useInput from './hooks/useInput';

function App() {
  const Username = useInput('');
  const Password = useInput('');

  return (
    <div>
      <input {...Username} type='text' placeholder='Username' />
      <input {...Password} type='password' placeholder='Password' />
      <button onClick={() => console.log(Username.value, Password.value)}>Click</button>
    </div>
  );
}

export default App;
