import React from 'react'

const Total = (props) => {
    const total = props.contents.reduce(
        (prevValue, currentValue) => prevValue + currentValue.exercises,
        0
      );
    return (
        <div>
            <p>Total is: {total}</p>
        </div>
    )
}

export default Total