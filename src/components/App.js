import React from 'react'
import Fullname from './Fullname'
export  const App=()=>{

    return(<div className=''>
    <div className='row ' style={{height:"100vh",padding:"50px",}}>
      <div className='col-md-6 offset-md-3' style={{marginTop:"auto",marginBottom:"auto"}}  >
      <Fullname/>
      </div>
      
    </div></div>)
}