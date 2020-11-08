import React, { useState } from "react";
import Add from "./Components/Main/Add";
import List from "./Components/Main/List";

const App = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handlePluse = () => {
        setList([...list, { text: input, id: Math.random() * 100 }]);
    };
    const handleTrash = (i) => {
        setList(list.filter(o=>o.id!==i.id))
    }
    return (
        <>
            <div className="master">
                <Add
                    input={input}
                    onPluse={handlePluse}
                    onChange={handleChange}
                />
                <List list={list} onTrash={handleTrash}/>
            </div>
        </>
    );
};

export default App;
