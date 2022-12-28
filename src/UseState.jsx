import React from 'react'
import { useState } from 'react'

const UseState = () => {

  // let Name = 'Varun'
  // function Changevalue() {
  //   Name = 'Varunraje'
  //   console.log(Name)
  // }

  const [Name, setName] = useState('Varun')
  //useState(initalState, function)


  // function Changevalue() {
  //   setName('Varunraje')
  // }

  /*******Toggle Selection ********/

  function Changevalue() {
    Name === 'Varun' ? (
      setName('Varunraje')
    ) : setName('Varun')
  }

  return (
    <>
      <h1>{Name}</h1>
      <button onClick={Changevalue} >Change Value</button>
    </>
  )
}

export default UseState