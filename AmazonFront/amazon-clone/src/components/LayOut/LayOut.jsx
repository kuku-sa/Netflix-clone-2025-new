import React from 'react'
import Header from '../Header/Header'

function LayOut({children}) {
  return (
    <div>
         <Header/>
         <Outlet />
    </div>
  )
}

export default LayOut