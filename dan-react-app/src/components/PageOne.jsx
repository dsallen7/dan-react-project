import { useRef } from 'react';
import React, {useState} from 'react';
import PropTypes from 'prop-types';

function PageOne(props) {

    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        props.setName(inputRef.current.value);
    }

    return( 
        <div>
            <p>Page {props.index}</p>
            <p>Name: {props.name}</p>
            <p>
                <input type="text" name="nameInput" ref={inputRef}/>
                <button onClick={handleSubmit}>Update</button>
            </p>
        </div>
    );
}

PageOne.propTypes = {
    index: PropTypes.number
}

PageOne.defaultProps = {
    index: -999
}

export default PageOne