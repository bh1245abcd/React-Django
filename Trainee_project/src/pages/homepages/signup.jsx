import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const nav = useNavigate()
  return (
    <div className='flex flex-col items-center justify-center' style={{marginTop:"16px",marginBottom:"16px"}}>
    <h1 className='' style={{fontSize:"28px"}}>Signup</h1>
    <input type="text" placeholder='enter username' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}}/><br />
    <input type="gmail" placeholder='enter gmail' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}} /><br />
    <input type="password" placeholder='enter password' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}}/><br />
    <input type="password" placeholder='confrim password' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}}/><br />
    <button  style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px",marginBottom:"20px"}} onClick={()=>nav("/login")}>Create Account</button>
    <p>Already have a account ? <span onClick={()=>nav("/login")} style={{fontWeight:"bold"}}>Login</span></p>
    </div>
  )
}

export default Signup



 