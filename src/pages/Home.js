import React from 'react'

import{ useNavigate }from 'react-router-dom'


function Home() {
    const navigate = useNavigate();
 
    function handler(){
        navigate('/login');
    }


  return (
    <div>
        <p>This is home page</p>        
        <button onClick={handler}>Login</button>
    </div>
  )
}

export default Home