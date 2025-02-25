import React, { useState, useEffect } from "react";

function IsQuetta() {
    const [isQuetta, setIsQuetta] = useState(null);

    useEffect(() => {
        async function checkQuetta() {
            //mobile quetta만 탐지 가능
            if ("userAgentData" in navigator) {
                const uaData = navigator.userAgentData;
                const found = uaData.brands.some((item) => item.brand === "Quetta");
                setIsQuetta(found);
            } else {
                setIsQuetta(false);
            }
        }

        checkQuetta();
    }, []);

    return (
        <div>
            <h1>{isQuetta === null ? "Checking..." : isQuetta ? "Quetta Found!" : "NO Quetta"}</h1>
        </div>
    );
}

export default IsQuetta;