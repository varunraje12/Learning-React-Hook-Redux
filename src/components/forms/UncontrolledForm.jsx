import React, { useRef } from 'react'


const UncontrolledForm = () => {
  const name = useRef(null)


  function Submit() {
    console.log(name.current.value)
  }

  return (
    <>
      <form>
        <label htmlFor='name'>Enter Your Name</label>
        <input id='name' type='text' ref={name} />
      </form>
      <button onClick={Submit}>Submit</button>
    </>
  )
}

export default UncontrolledForm