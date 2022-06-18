import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Paragraph({ introduction, command, heightContent, widthContent }) {
    return (
        <div className={command ? "paragraph" : "paragraph paragraph_noCode"}>
            {introduction}
            {command && (
                <div className="monospace">
                    <textarea
                        style={{ height: heightContent, width: widthContent }}
                        value={command}
                        readOnly
                    />

                    <CopyToClipboard text={command}>
                        <button>
                            <img src="https://clck.ru/r5L6U" />
                        </button>
                    </CopyToClipboard>
                </div>
            )}
        </div>
    );
}

export default Paragraph;
