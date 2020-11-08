import React from "react";
import ToDo from "../Common/ToDo";

const List = ({ list }) => {
    return (
        <>
            <div>
                <ul>
                    {list.map((i) => (
                        <ToDo key={i.id} ola={i.text}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
