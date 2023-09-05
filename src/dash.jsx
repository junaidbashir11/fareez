import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Dash() {

  const [name,setName]=useState("")
  const [product,setProduct]=useState("")
  const [response,setResponse]=useState(false)

async function send(e){
  e.preventDefault()
  let data={
    "name":name,
    "product":product
  }

  let request=await fetch("http://localhost:80/chatbot",{
    method:"post",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data)
  })
  let response=await request.json()
  setResponse(response.status)
}

  return (
    <>
      
      <h1>AI powered SMS marketing </h1>
      <div className="card">
    
        <input  placeholder='customer' value={name} className='ccc' onChange={(e)=>setName(e.target.value)}></input><br/>
        <input  placeholder='product' value={product} className='ccc' onChange={(e)=>setProduct(e.target.value)}></input><br/>

        <button onClick={(e) => send(e)}>
          send
        </button>
      <p>{String(response)}</p>
      </div>
      <p className="read-the-docs">
      power your marketing campaigns using AI
      </p>
    </>
  )
}

export default Dash
