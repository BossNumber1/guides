import React from "react";
import AdvancedParagraph from "./AdvancedParagraph";
import MainTitle from "./MainTitle";
import Paragraph from "./Paragraph";
import Source from "./Source";

function Main({ content, readTime, linkSource }) {
    return (
        <div className="main">
            <MainTitle readTime={readTime} />

            {content.ParagraphContent.map((el) => {
                return (
                    <Paragraph
                        key={el.index}
                        introduction={el.introduction}
                        command={el.command}
                        heightContent={el.heightContent}
                        widthContent={el.widthContent}
                    />
                );
            })}

            {content.AdvancedParagraphContent.map((el) => {
                return (
                    <AdvancedParagraph
                        key={el.index}
                        introduction={el.introduction}
                        developerCommand={el.developerCommand}
                        productionCommand={el.productionCommand}
                        widthContentDeveloper={el.widthContentDeveloper}
                        widthContentProduction={el.widthContentProduction}
                    />
                );
            })}

            {linkSource && <Source linkSource={linkSource} />}
        </div>
    );
}

export default Main;
