import React from 'react';
import PropTypes from 'prop-types';

const Square = ({value, onClick}) => {

    return (
        <>
            <button className="square" onClick={() => onClick()}>
                {value}
            </button>
        </>
    )
}

Square.propTypes = {
    value: PropTypes.string
}

export default Square;