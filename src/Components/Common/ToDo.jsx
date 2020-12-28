import React from "react";

const Todo = ({ todo, todos, setTodos, setSort, sort, s }) => {
    const handleDelete = () => {
        setSort(sort.filter((t) => t.id !== s.id));
    };
 
    const handleCheck=()=>{
        const t = [...sort]
        const index = t.indexOf(s)
        t[index].completed = !t[index].completed
        setSort(t)
    }
    return (
        <>
            <div className="list-form">
                <li className={s.completed ? "unCompleted" : "completed"}>
                    {s.text}
                </li>
                <button>
                    <i className="fa fa-trash" onClick={handleDelete} />
                </button>
                <button>
                    <i className="fa fa-check-square" onClick={handleCheck} />
                </button>
            </div>
        </>
    );
};

export default Todo;
