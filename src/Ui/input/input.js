import { useState } from "react";



const Input = ({ label, type = "text", bootstrapId, state, setState }) => {
    return (
        <div className="form-floating mb-3">
            <input type={type}
                className="form-control"
                id={bootstrapId}
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder={label} />
            <label htmlFor="floatingInput">{label}</label>
        </div>
    );
}

export default Input;