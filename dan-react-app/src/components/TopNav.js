import React, {Component} from "react";

function TopNav(props) {

    const navPage = (index) => {
        props.setIndex(index);
        console.log(props.index);
    }

    return(
        <p>
            <button onClick={() => navPage(1)} index='1'>Page One</button>
            <button onClick={() => navPage(2)} index='2'>Page Two</button>
        </p>
    );
}

export default TopNav