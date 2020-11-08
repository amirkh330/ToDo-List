import React from "react";
import ToDo from "../Common/ToDo";

const List = ({ list,onTrash,onCheck }) => {
    return (
        <>
            <div>
                <ul>
                    {list.map((i) => (
                        <ToDo key={i.id} ola={i} onCheck={()=>onCheck(i)} onTrash={()=>onTrash(i)}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
