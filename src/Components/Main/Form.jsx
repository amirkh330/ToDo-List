import React from "react";
const Form = ({ setInputText, setTodos, inputText, todos,status,setStatus }) => {
    
    const handleChange = (e) => {
        setInputText(e.target.value);
    };
    
    const handleSelect = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 100 },
        ]);
        setInputText("");
    };

    const handleChangeForm=(e)=>{
        setStatus(e.target.value)
    }
    return (
        <>
            <form className="form">
                <input
                    className="input"
                    type="text"
                    onChange={handleChange}
                    value={inputText}
                />
                <button onClick={handleSelect}>
                    <i className="fa fa-plus" />
                </button>
                <select onChange={handleChangeForm}>
                    <option value="all">all</option>
                    <option value="completed">compeleted</option>
                    <option value="uncompleted">uncompeleted</option>
                </select>
            </form> 
        </>
    );
};

export default Form;
