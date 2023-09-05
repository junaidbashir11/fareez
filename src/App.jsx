import './App.css'
import { useState } from 'react'
import Dash from './dash'


export default function App(){

const [show,setShow]=useState(true)

function setshow(value){
  setShow(Boolean(value))
}


return (

  <>
  {
  
  show==true?<>
  <div>
        <a href="" target="_blank">
          <img src="/marketing.png" className="logo" alt="Vite logo" />
        </a>
       <h1  class="H1">POP MARKET</h1>
      </div>
      <h1>AI powered SMS marketing </h1>
      <div className="card">
   
      </div>
      <p className="read-the-docs">
      power your marketing campaigns using AI
      </p>
      <center></center>
  
  </>:<> <Dash/>   </>

  }
      

      <button onClick={()=>setshow(true)}>X</button>
      
      <button onClick={()=>setshow(false)}>send messages</button>

      
      
    </>

)




}