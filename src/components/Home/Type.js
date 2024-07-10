import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Loading field: 'Data Science'...",
                    ">>> Output: Success",
                    "Loading field: 'Mathematics'...",
                    ">>> Output: Success",
                    "Loading field: 'Machine Learning'...",
                    ">>> Output: Success",
                    "Loading field: 'Software Development'...",
                    ">>> Output: Success"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 75,
                cursor: "_",
                wrapperClassName: "typewriter-wrapper",
                cursorClassName: "typewriter-cursor",
            }}
        />
    );
}

export default Type;