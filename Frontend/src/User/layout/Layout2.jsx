import React from 'react'
import Header2 from '../components/header/header2/Header2'
import {Outlet} from 'react-router-dom'

const Layout2 = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
        {/* Header */}
        <Header2 />

        {/* Page content */}
        <main className='flex-1'>
            <Outlet />
        </main>
        
    </div>
  )
}

export default Layout2