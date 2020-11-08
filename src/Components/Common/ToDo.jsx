import React from "react";

const ToDo = ({ola}) => {
    
    const onTrash=()=>{
        delete button
    }

    return (
        <div className="todo-form">
            <li className="todo-item">{ola}</li>
            <button onClick={onTrash} className="na">
                <i  className="fa fa-trash"></i>
            </button>
            <button onClick={onCheck}>
                <i  className="fa fa-check-square"></i>
            </button>
        </div>
    );
};

export default ToDo;
