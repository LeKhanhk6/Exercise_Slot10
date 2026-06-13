import { useState } from 'react';
import '../css/ToDoList.css'; 

export default function ToDoList() {
   
    const [todos, setToDos] = useState([
        { id: 1, text: 'Học lập trình .NET' },
        { id: 2, text: 'Học lập trình Java' }
    ]);
    const [taskInput, setTaskInput] = useState('');

    const handleAddToDo = (e) => {
        e.preventDefault();
        if (taskInput.trim() === '') return;

        const newToDo = {
            id: Date.now(),
            text: taskInput
        };
        setToDos([...todos, newToDo]);
        setTaskInput('');
    };

    const handleDeleteToDo = (idToDelete) => {
        const updateTodos = todos.filter((todo) => todo.id !== idToDelete);
        setToDos(updateTodos);
    };

    return (
        <div className="page-wrapper">
            
            <form onSubmit={handleAddToDo} className="form-section">
                <input 
                    type="text" 
                    placeholder="Please input a Task" 
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)} 
                    className="input-field"
                />
                <button type='submit' className="red-button">
                    Add Todo
                </button>
            </form>

            <div className="todo-card">
                <h3 className="card-title">Todo List</h3>
                <div className="list-wrapper">
                    {todos.map((todo) => (
                        <div key={todo.id} className="todo-item">
                            <span className="todo-text">{todo.text}</span>
                            <button 
                                onClick={() => handleDeleteToDo(todo.id)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    {todos.length === 0 && (
                        <p style={{ color: '#888', textAlign: 'center', margin: '10px 0 0' }}>
                            No tasks left!
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}