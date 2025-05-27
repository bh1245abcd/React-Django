import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const n = useNavigate() 
  return (
    <div className='flex flex-col items-center justify-center' style={{marginTop:"16px",marginBottom:"16px"}}>
    <h1 style={{fontSize:"28px"}}>Login</h1>
    <input type="text" placeholder='enter username' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}}/><br />
    <input type="password" placeholder='enter password' style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px"}}/><br />
    <button style={{border:"2px solid grey",padding:"2px",borderRadius:"10px",width:"320px",marginBottom:"10px"}} onClick={()=>n("/")}>Login</button>
    <p>Don't have a account ? <span onClick={()=>n("/Signup")} style={{fontWeight:"bold"}}>Sign up</span></p>
    </div>
  )
}

export default Login

 