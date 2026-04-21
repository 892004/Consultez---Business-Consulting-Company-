import React from 'react'
import Header1 from '../components/header/header1/Header1'
import {Outlet} from 'react-router-dom'

const Layout1 = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Header */}
        <Header1 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
    </div>
  )
}

export default Layout1