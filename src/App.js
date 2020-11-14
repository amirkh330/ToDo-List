import React, { useEffect, useState } from "react";
import Form from "./Components/Main/Form";
import TodoList from "./Components/Main/TodoList";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filtered, setFilterd] = useState([]);

    useEffect(() => {
        getLocal();
    }, []);
    useEffect(() => {
        // const filter =()=>{
        //     setTodos(status === 'all'?todos:todos.filter(t=>t.completed === status))
        // };

        const filter = () => {
            switch (status) {
                case "completed":
                    setFilterd(todos.filter((t) => t.completed === true));
                    break;

                case "uncompleted":
                    setFilterd(todos.filter((t) => t.completed === false));
                    break;

                default:
                    setFilterd(todos);
                    break;
            }
        };
        filter();
        saveLocal();
        //    setTodos(filtered)
    }, [todos, status]);

    const saveLocal = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };
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
                <p className="title">Amir ToDO List ;)</p>
                <Form
                    inputText={inputText}
                    status={status}
                    todos={todos}
                    setFilterd={setFilterd}
                    setTodos={setTodos}
                    setStatus={setStatus}
                    setInputText={setInputText}
                />
                <TodoList
                    todos={todos}
                    setTodos={setTodos}
                    setFilterd={setFilterd}
                    filtered={filtered}
                />
            </div>
        </>
    );
};

export default App;
