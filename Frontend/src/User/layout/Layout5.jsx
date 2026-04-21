import React from 'react'
import {Outlet} from 'react-router-dom'
import Header5 from '../components/header/header5/Header5'

const Layout5 = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
        {/* Header */}
   <Header5 />
        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
    </div>
  )
}

export default Layout5