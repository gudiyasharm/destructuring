import React from 'react'

const employee = {
    id: '12235',
    name: 'Jhon',
    salary: '$200',
    address: {
        street: '210 Washington Street',
        country: 'Canada',
        zipcode: '589601',
        salary: '$300',
        zones: {
            plantzones: '78C',
            alienzones: '56F',
        }
    }
};


const ObjectDes = () => {
    const {name, id, salary: salaryEmp, address} = employee;
    const {street, country, zipcode, zones} = address;
    const {plantzones, alienzones} = zones
  return (
    <div>
        <h1>Name is: {name}</h1>
        <h1>ID is: {id}</h1>
        {/* <h2>Address is: {address.street}</h2> */}
        <h2>{`The Employees address: ${street}, ${country},  ${zipcode}`}</h2>
        <h2>{`Zones: ${plantzones}, ${alienzones}`}</h2>
        <h2>Employee Salary is: {salaryEmp}</h2>
    </div>
  )
}

export default ObjectDes