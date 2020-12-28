import React from "react";
import Todo from "./../Common/Todo";

const TodoList = ({ todos, setTodos, sort, setSort }) => {
    return (
        <>
            <ul>
                {sort.map((s) => (
                    <Todo
                        setSort={setSort}
                        sort={sort}
                        setTodos={setTodos}
                        todos={todos}
                        key={s.id}
                        s={s}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
