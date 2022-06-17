import React from "react";

function Paragraph({
    introduction,
    command,
    commandNumber,
    heightContent,
    widthContent,
}) {
    const [commands, setCommands] = React.useState(false);

    React.useEffect(() => {
        if (command && !commands) {
            let commandList = command.map((el) => {
                return el + "\n";
            });

            setCommands(commandList);
        } else {
            console.log("commands =", commands);
        }
    }, [commands]);

    // const copyCommand = (numberCommand) => {
    //     const copiedTextInput =
    //         document.getElementsByClassName("monospace")[+numberCommand]
    //             .children[0];

    //     copiedTextInput.select();
    //     document.execCommand("copy");
    // };

    return (
        <div className={command ? "paragraph" : "paragraph paragraph_noCode"}>
            {introduction}
            {command && (
                <div className="monospace">
                    {/* <textarea value={commands} style={{ height: 120 + "px" }} /> */}
                    {/* <input dangerouslySetInnerHTML={{ __html: commands }} /> */}

                    <textarea
                        value={command}
                        style={{ height: heightContent, width: widthContent }}
                        readOnly
                    />

                    {/* <button onClick={copyCommand(commandNumber)}>
                        <img src="https://clck.ru/r5L6U" />
                    </button> */}
                </div>
            )}
        </div>
    );
}

export default Paragraph;
