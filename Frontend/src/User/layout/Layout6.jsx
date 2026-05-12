import React from 'react'
import Header6 from '../components/header/header6/Header6'
import { Outlet } from 'react-router-dom'

const Layout6 = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
        {/* Header */}
    <Header6 />

    {/* Page Content */}
    <main className='flex-1'>
    <Outlet />
    </main>
    </div>
  )
}

export default Layout6