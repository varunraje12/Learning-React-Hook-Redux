import React, { useState } from 'react'

const UseStateArray = () => {

  const BioData = [
    {
      id: 0, Name: 'Varunraje', age: 19
    }, {
      id: 1, Name: 'Vikas', age: 18
    }, {
      id: 2, Name: 'Harsh', age: 20
    }, {
      id: 3, Name: 'Harshit', age: 17
    }
  ]

  const [data, setdata] = useState(BioData)

  // console.log(BioData)

  function Cleardata() {
    setdata([])
  }

  function clear(id) {
    // alert(id)
    const NewArray = data.filter((e) => {
      return e.id !== id
    })
    setdata(NewArray)
  }

  return (
    <>
      {
        data.map((e) =>
          <h1 key={e.id}>Name : {e.Name} & Age: {e.age}
            <button onClick={() => clear(e.id)}>remove</button>
          </h1>
        )
      }
      <button onClick={Cleardata}>Clear Data</button>

    </>
  )
}

export default UseStateArray