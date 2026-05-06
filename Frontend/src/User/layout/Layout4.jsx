import React from 'react'
import {Outlet} from 'react-router-dom'
import Header4 from '../components/header/header4/Header4'

const Layout4 = () => {
  return (
    <div className="flex flex-col relative overflow-hiddenx">
        {/* Header */}
       <Header4 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
    </div>
  )
}

export default Layout4