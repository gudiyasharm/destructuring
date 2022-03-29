import React from 'react'

const persons = [
    { name: 'James' },
    { name: 'Nicks' },
    { name: 'Paul' },
    { name: 'Jorge' },
    { name: 'Bob' },
    { lastname: 'Aliya' },
]
const Every = () => {
    const output = persons.every(person => person.name !== undefined);
    console.log(output)
    return (
        <div>
            <h1>Every Method</h1>
        </div>
    )
}

export default Every