import React from 'react'

function Dashboard() {
 
  const handler = () => {
    localStorage.removeItem('email')
    window.location.reload()
  }

  return (
    <div>
      <p>Dashboard</p>
      <button onClick={handler}>LogOut</button>
    </div>
  )
}

export default Dashboard