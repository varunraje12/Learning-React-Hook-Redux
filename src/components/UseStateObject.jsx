import React, { useState } from 'react'

const UseStateObject = () => {

  const [Obj, setObj] = useState({
    Name: 'Varunraje', Age: 20, Degree: 'BCA'
  });

  function Changedata() {
    setObj({ ...Obj, Name: 'Varun' })
  }

  return (
    <>
      <h1>Name: {Obj.Name} Age:{Obj.Age} Degree:{Obj.Degree}</h1>
      <button onClick={Changedata}>Update Data</button>
    </>
  )
}

export default UseStateObject