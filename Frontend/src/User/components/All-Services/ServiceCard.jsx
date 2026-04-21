import React from 'react'

const serviceCard = ({data}) => {
  console.log(data)
  return (
   <section className="Service-card h-140 w-150  flex flex-row ">
          <div className="left h-full w-[55%] bg-[#102930] relative p-10 flex flex-col items-start justify-between">
              <img src={data.serviceLeftBg} className='absolute left-20 top-50'/>

             <p className='text-8xl text-[#C6D936] transform transition duration-800 hover:rotate-y-[360deg]'>{data.icons}</p>

             <div className="content flex flex-col items-start gap-3">
                <span className='text-[#C6D936] text-2xl font-bold'>{data.no}</span>
                <p className='text-white text-2xl font-bold '>{data.heading}</p>
                <p className='text-white text-lg font-light'>{data.para}</p>
             </div>
          <button className='text-2xl bg-[#1A4137] h-30 w-15 cursor-pointer rounded-full absolute top-50 -right-5 flex items-center justify-center text-white transform duration-700 hover:bg-[#C6D936]'>{data.btn}</button>
          </div>

          <div className="right h-full w-[45%]">
                <img src={data.serviceRighgImg} className='h-full w-full object-cover'/>
          </div>
   </section>
  )
}

export default serviceCard