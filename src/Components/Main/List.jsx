import React from "react";
import ToDo from "../Common/ToDo";

const List = ({ list,onTrash }) => {
    return (
        <>
            <div>
                <ul>
                    {list.map((i) => (
                        <ToDo key={i.id} ola={i.text} onTrash={()=>onTrash(i)}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
