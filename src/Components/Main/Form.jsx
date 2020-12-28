import React from "react";

const Form = ({ inputText, setInputText, setTodos, todos }) => {
    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handlePluse = () => {
        setTodos([
            { text: inputText, completed: false, id: Math.random()* 100 },
            ...todos,
        ]);
        setInputText('')
    };

    return (
        <>
            <div className="input-form">
                <input className="input" onChange={handleChange} value={inputText}/>
                <button onClick={handlePluse}>
                    <i className="fa fa-plus" />
                </button>
            </div>
        </>
    );
};

export default Form;
