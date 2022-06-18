import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AdvancedParagraph({
    introduction,
    developerCommand,
    productionCommand,
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
                    style={{ width: widthContentDeveloper }}
                    value={developerCommand}
                    readOnly
                />
                <CopyToClipboard text={developerCommand}>
                    <button>
                        <img src="https://clck.ru/r5L6U" />
                    </button>
                </CopyToClipboard>
            </div>
            <br />- <b>в production-режиме</b>:
            <div className="monospace">
                <input
                    style={{ width: widthContentProduction }}
                    value={productionCommand}
                    readOnly
                />
                <CopyToClipboard text={productionCommand}>
                    <button>
                        <img src="https://clck.ru/r5L6U" />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default AdvancedParagraph;
