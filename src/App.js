import React, { useState } from "react";

export default function TodoApp() {
    const [taskText, setTaskText] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleAddTaskClick() {
        const trimmedTaskText = taskText.trim();

        if (!trimmedTaskText) {
            return;
        }

        setTasks((prevTasks) => [...prevTasks, trimmedTaskText]);
        setTaskText("");
    }

    return (
        <div>
            <h2>Todo App</h2>
            <input
                type="text"
                name="taskText"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Введите задачу"
            />
            <button type="button" onClick={handleAddTaskClick}>
                Добавить задачу
            </button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}
