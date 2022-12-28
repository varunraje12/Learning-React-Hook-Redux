import React, { useState } from 'react'

const BasicForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const Submit = () => {
    console.log(email, password)

    setEmail("")
    setPassword("")
  }


  return (
    <>
      <form>
        <div>
          <label>Email </label>
          <input type='text' placeholder='Enter Your Email'
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password </label>
          <input type='password' placeholder='Enter Your Password'
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>

      <button onClick={Submit}>Submit</button>
    </>
  )
}

export default BasicForm