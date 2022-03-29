import React from 'react'

const people = [
    {name: 'James', age: '65'},
    {name: 'Nicks', age: '28'},
    {name: 'Paul', age: '55'},
    {name: 'Jorge', age: '67'},
    {name: 'Bob', age: '35'},
    {name: 'Aliya', age: '45'},
]

const Filter = () => {
    const names = ['Jhon', 'Aliya', 'Joney', 'Shena', 'Cristene', 'Jack']

    return (
        <div>
            <div>
            <h1 style={{ color: 'red' }}>Filter Name that includes 'J'</h1>
            {names.filter(name => name.includes('J')).map(filteredName => (
                <h4><li>
                    {filteredName}
                </li></h4>
            ))}
            </div>
            <div>
                <h1 style={{color: 'green'}}>Filter Name Who's age is greater than 43</h1>
                {people.filter(peoples => peoples.age >= 43).map(filteredPeoples =>(
                    <h4><li>
                    {filteredPeoples.name}
                </li></h4>
                ))}
            </div>
        </div>
    )
}

export default Filter