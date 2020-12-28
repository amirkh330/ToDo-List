import React, { useEffect, useState } from "react";
import Form from "./Components/Main/Form";
import TodoList from "./Components/Main/TodoList";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [sort, setSort] = useState([]);
    
        useEffect(() => {
            getLocal();
        }, []);

    useEffect(() => {
        const filter = () => {
            switch (status) {
                case "completed":
                    setSort(todos.filter((t) => t.completed === true));
                    break;

                case "uncompleted":
                    setSort(todos.filter((t) => t.completed === false));
                    break;

                default:
                    setSort(todos);
                    break;
            }
        };
        filter();
        handleGetSave()
    }, [todos,status]);
    

    const handleChangeSelect = (e) => {setStatus(e.target.value);};

    const handleGetSave=()=>{localStorage.setItem('todos',JSON.stringify(todos))}

    const getLocal = () => {
        if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
    } else {
        let todolocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todolocal);
    }
    
};

    

    return (
        <>
            <div className="master">
                <h1 className="title">Amir TODO List</h1>
                <div className="form">
                    <Form
                        todos={todos}
                        setTodos={setTodos}
                        inputText={inputText}
                        setInputText={setInputText}
                    />
                    <select onChange={handleChangeSelect}>
                        <option value="all">All</option>
                        <option value="uncompleted">Uncompleted</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setSort={setSort}
                    sort={sort}
                />
            </div>
        </>
    );
};

export default App;
