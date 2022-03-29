import React from 'react';
import Total from './Total';

const Reduce = () => {
    const course = {
        name: "Half Stack application development",
        contents: [
            {
                name: "Fundamentals of React",
                exercises: 10,
                id: 1
            },
            {
                name: "Using props to pass data",
                exercises: 7,
                id: 2
            },
            {
                name: "State of a component",
                exercises: 14,
                id: 3
            },

            {
                name: "Api Calling",
                exercises: 15,
                id: 3
            }
        ]
    };
    return (
        <div>
            <h1>Reduce Method</h1>
            <h2><Total contents={course.contents} /></h2>
        </div>
    )
}

export default Reduce