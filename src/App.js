import React, { useState } from "react";
import Add from "./Components/Main/Add";
import List from "./Components/Main/List";

const App = () => {
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log(input);
    };

    const handlePluse = () => {
        setList([
            ...list,
            { text: input, id: Math.random() * 100, completed: false },
        ]);
        setInput("")
    };
    const handleTrash = (i) => {
        setList(list.filter((o) => o.id !== i.id));
    };
    const handleCheck = (i) => {
        const allList = [...list];
        const index = allList.indexOf(i);
        allList[index].completed = !allList[index].completed;
        setList(allList);
    };
    return (
        <>
            <div className="master">
                <Add
                    input={input}
                    onPluse={handlePluse}
                    onChange={handleChange}
                />
                <List list={list} onCheck={handleCheck} onTrash={handleTrash} />
            </div>
        </>
    );
};

export default App;
