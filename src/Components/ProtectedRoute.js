import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const navigate = useNavigate();

    const {Compo} = props

    useEffect(()=>{
      const isLogedIn = localStorage.getItem('email');
        if(!isLogedIn){
            navigate('/login');
        }
    })

  return (
    <Compo />
  )
}

export default ProtectedRoute