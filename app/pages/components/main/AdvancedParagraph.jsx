import React from "react";

function AdvancedParagraph({
    introduction,
    developerCommand,
    developerCommandNumber,
    productionCommand,
    productionCommandNumber,
    widthContentDeveloper,
    widthContentProduction,
}) {
    return (
        <div className="paragraph">
            {introduction}
            <br />
            <br />- <b>в developer-режиме</b>:
            <div className="monospace">
                <input
                    value={developerCommand}
                    readonly
                    style={{ width: widthContentDeveloper }}
                />
                <button onclick={`copyCommand('${developerCommandNumber}')`}>
                    <img src="https://clck.ru/r5L6U" />
                </button>
            </div>
            <br />- <b>в production-режиме</b>:
            <div className="monospace">
                <input
                    value={productionCommand}
                    readonly
                    style={{ width: widthContentProduction }}
                />
                <button onclick={`copyCommand('${productionCommandNumber}')`}>
                    <img src="https://clck.ru/r5L6U" />
                </button>
            </div>
        </div>
    );
}

export default AdvancedParagraph;
