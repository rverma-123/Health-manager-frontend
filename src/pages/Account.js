import React , {useState} from 'react'
// import { FaBars } from "react-icons/fa";
// import { MdAccountCircle } from "react-icons/md";

import Profile from './Profile'
import SendMessage from './SendMessage'
function Account() {
     
 

  return (
    <div className='mt-20 bg flex flex-col'>
        
          <Profile /> 
          {/* <SendMessage /> */}
        

    </div>
  )
}

export default Account