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
    return (
        <>
            <div className="master">
                <Add
                    input={input}
                    onPluse={handlePluse}
                    onChange={handleChange}
                />
                <List list={list} />
            </div>
        </>
    );
};

export default App;
