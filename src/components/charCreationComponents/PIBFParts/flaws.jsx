import React, { useContext } from "react";
import { CharCreationContext } from "../../charCreation";

function Flaws() {

    const { flaws, setFlaws } = useContext(CharCreationContext);

    function enter(event) {
        if (event.key === "Enter") {
            const value = event.target.value;
            setFlaws(prev => [...prev, value]);
            event.target.value = "";
        }
    }

    function remove(index) {
        setFlaws(prev => prev.filter((_, i) => i !== index));
    }

    return <div className="flaws">
        <input placeholder="Flaws" name="flaws" onKeyDown={enter}></input>
        {flaws.map((flaw, index) =>
            <div className="flaw" key={index}>
                <p className="flaw inline zero-margin">{flaw}</p>
                <button className="delete-button" onClick={() => remove(index)}>-</button>
            </div>
        )}
        <p className="center zero-margin">Flaws</p>
    </div>
}

export default Flaws;