import React from "react";

function PageTwo() {
    const fruits = ["Apple", "Banana", "Mango"];
    return (
    <ul>
        {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
        ))}
    </ul>
    );
}

export default PageTwo