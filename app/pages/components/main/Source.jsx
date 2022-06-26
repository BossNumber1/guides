import React from "react";

function Source({ linkSource }) {
    return (
        <div className="main__source">
            Источник:
            <a href={linkSource}>Тот самый видео-урок на английском</a>
        </div>
    );
}

export default Source;
