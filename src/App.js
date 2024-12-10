import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';

function App() {

  let dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  let [todo, setTodo] = useState('');

  let addTodo = () => {
    if (todo.trim()) {
      dispatch({ type: 'ADD_TODO', todo });
      setTodo('');
    }
  };

  let removeTodo = (index) => {
    dispatch({ type: 'REMOVE_TODO', index });
  };

  return (
   


    <div className='App'>
    <h1>Todo List</h1>
    <input
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      placeholder="Enter a todo"
      style={{ padding: '10px', fontSize: '16px', width: '250px' }}
    />
    <button
      onClick={addTodo}
      style={{ marginLeft: '10px', padding: '10px 20px', fontSize: '16px' }}
    >
      Add
    </button>
    <ul style={{ listStyleType: 'none', marginTop: '20px', padding: 0 }}>
      {todos.map((item, index) => (
        <li key={index} style={{ margin: '10px 0' }}>
          {item}
          <button
            onClick={() => removeTodo(index)}
            style={{
              marginLeft: '10px',
              padding: '5px 10px',
              fontSize: '14px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>

  );
}

export default App;
