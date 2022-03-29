import React from 'react'

const Some = () => {
    const numbers = [1, 0, 4, 5, 7, 9, 10];

    let result = numbers.some((number) =>{
        return number === 0
    })
    console.log(result)
  return (
    <div>Some</div>
  )
}

export default Some