import React from "react";

function Paragraph({ introduction, command, commandNumber }) {
    return (
        <div className="paragraph">
            {introduction}
            <div className="monospace">
                <input value={command} readonly />
                <button onclick={`copyCommand('${commandNumber}')`}>
                    <img src="https://clck.ru/r5L6U" />
                </button>
            </div>
        </div>
    );
}

export default Paragraph;
