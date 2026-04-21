import React from 'react'
import {Outlet} from 'react-router-dom'
import Header3 from '../components/header/header3/Header3'

const Layout3 = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
        {/* Header */}
       <Header3 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
    </div>
  )
}

export default Layout3