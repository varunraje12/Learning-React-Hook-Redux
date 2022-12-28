import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    // alert("heelo")
    // console.log("Heelo") //This will run second(second Prioerty)
    count === 0 ? (
      document.title = 'Chats'
    ) : document.title = `Chats(${count})`
  },/**[]**/  // This [] means Your useEffect will be call only 1 time..not all time when page component changes
  )


  // console.log("Hi")  //This will run first(First Prioerty)..Component First Proverity is Console..Hi will print first after that Heelo will print

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default UseEffect