import React from 'react'
import {Outlet} from 'react-router-dom'
import Header3 from '../components/header/header3/Header3'

const Layout3 = () => {
  return (
     <div className="flex flex-col relative overflow-hidden">
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