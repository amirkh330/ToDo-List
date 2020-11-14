import React from "react";
const Todo = ({ todo, setTodos, todos,setFilterd }) => {
    const handleDelete = () => {
        setFilterd(todos.filter((t) => t.text !== todo.text));
    };

    const handleCheck = () => {
       const Todo = [...todos]
       const index = Todo.indexOf(todo)
       Todo[index].completed = !Todo[index].completed
       setTodos(Todo)
    };
    return (
        <>
            <li className="li">
                <div className={todo.completed ? "check" : 'uncheck'}>
                    {todo.text}
                </div>
                <div className="l2">
                    <button>
                        <i onClick={handleCheck} className="fa fa-check l2" />
                    </button>
                    <button>
                        <i onClick={handleDelete} className="fa fa-trash l2" />
                    </button>
                </div>
            </li>
        </>
    );
};

export default Todo;
