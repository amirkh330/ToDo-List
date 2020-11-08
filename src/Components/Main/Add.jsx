import React from "react";

const Add = ({ onChange, input, onPluse}) => {
    return (
        <>
            <div className="input_form">
                <input className="input" value={input} onChange={onChange} />
                <button className="button" onClick={onPluse}>
                    <i className="fa fa-plus-square"/>
                </button>
            </div>
        </>
    );
};

export default Add;
