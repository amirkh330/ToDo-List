import React from "react";

const ToDo = ({ ola, onTrash, onCheck }) => {
    // const handleStyle = () => {
    //     if (ola.completed === true) {
    //         return "textdecorationline: underline";
    //     } else {
    //         return null;
    //     }
    // };
    console.log(ola);
    return (
        <div className="todo-form">
            <li
                className=
                {
                    ola.completed  ? 
                    "todo-item completed" 
                    : "todo-item"
                }
            >
                {ola.text}
            </li>
            <button onClick={onTrash} className="na">
                <i className="fa fa-trash"></i>
            </button>
            <button onClick={onCheck}>
                <i className="fa fa-check-square"></i>
            </button>
        </div>
    );
};

export default ToDo;
