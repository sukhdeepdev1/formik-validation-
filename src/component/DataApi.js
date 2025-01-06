import axios from 'axios'
import React, { useState } from 'react'

const DataApi = () => {
  const [name, SetName] = useState("")
  const [email, SetEmail] = useState("")
  // const header = {"Acces-Control-Allow-Origin":"*"}
  const handlesubmit = (e) => {
    e.preventDefault()
    axios.post("https://64e07d6550713530432c5acb.mockapi.io/cruddataapi",
      {
        name: name,
        email: email,
        // header,
      }
      
    )
    
  }

  return (
    <>
      <form>

        <div class="mb-3">
          <label  class="form-label">Name</label>
          <input type="text" class="form-control"  onChange={(e) => SetName(e.target.value)} />
        </div>
        <div class="mb-3">
          <label  class="form-label">Email address</label>
          <input type="email" class="form-control"
            onChange={(e) => SetEmail(e.target.value)}
          />
        </div>

        <button onClick={handlesubmit} type="submit" class="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default DataApi

