import React from "react";
import Todo from "../Common/Todo";

const TodoList = ({ todos,setTodos,filtered,setFilterd }) => {
    return (
        <>
            <ul>
                {filtered.map((todo) => (
                    <Todo setFilterd={setFilterd} todo={todo} key={todo.id} setTodos={setTodos} todos={todos}/>
                ))}
            </ul>
        </>
    );
};

export default TodoList;
