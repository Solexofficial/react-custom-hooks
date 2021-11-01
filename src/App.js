import './App.css';
import React from 'react';
import axios from 'axios';
import useRequest from './hooks/useRequest';
function App() {
  const [todos, loading, error] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>Error </h1>;
  }

  return (
    <div>
      {todos &&
        todos.map(todo => (
          <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
            {todo.id}. {todo.title}
          </div>
        ))}
    </div>
  );
}

export default App;
