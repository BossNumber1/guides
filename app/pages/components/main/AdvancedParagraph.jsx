import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function AdvancedParagraph({
    introduction,
    developerCommand,
    productionCommand,
    widthContentDeveloper,
    widthContentProduction,
}) {
    const [copiedDevCom, setCopiedDevCom] = React.useState(false);
    const [copiedProdCom, setCopiedProdCom] = React.useState(false);

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
                    <button onClick={() => setCopiedDevCom(true)}>
                        {copiedDevCom ? (
                            <img src="https://clck.ru/rYDrr" />
                        ) : (
                            <img src="https://clck.ru/r5L6U" />
                        )}
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
                    <button onClick={() => setCopiedProdCom(true)}>
                        {copiedProdCom ? (
                            <img src="https://clck.ru/rYDrr" />
                        ) : (
                            <img src="https://clck.ru/r5L6U" />
                        )}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default AdvancedParagraph;
