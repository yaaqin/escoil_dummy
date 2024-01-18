import React from 'react'

export default function Home() {
  return (
    <>
     <section id='navbar' className='shadow-lg shadow-slate-700 py-[20px] px-[] px-[10px] fixed w-full flex items-center justify-between'>
       <h1 className='font-bold text-[30px]'>ESCOIL</h1>
       <div className='bg-[black] rounded-full h-[30px] w-[30px]'></div>
        </section> 
        <section id='body' className='grid grid-cols-3 gap-[50px] px-[20px] pt-[100px] pb-[30px]'>
            <section id='body1' className='border-[3px] border-[black] rounded-[20px]'>
                <h1>Navigasi</h1>
            </section>
            <section id='body2' className='border-[3px] border-[black] px-[10px] py-[15px] rounded-[20px] h-[82vh]'>
                <div className='flex gap-[20px]'>
                    <div className='w-[50px] h-[50px] rounded-full bg-[black]'></div>
                    <input placeholder='Search' className='border-[2px] w-[80%]  px-[15px] rounded-full border-[black]'></input>
                </div>
                <div className='grid grid-cols-4 gap-[20px] mt-[10px]'>
                    <div className='col-span-1 border-[2px] border black py-[3px]'>
                        <h3 className='text-center border-[black] border-[2px] rounded-full'>Jurusan</h3>
                    </div>
                    <div className='col-span-1 border-[2px] border black py-[3px]'>
                        <h3 className='text-center border-[black] border-[2px] rounded-full'>Jurusan</h3>
                    </div>
                    <div className='col-span-1 border-[2px] border black py-[3px]'>
                        <h3 className='text-center border-[black] border-[2px] rounded-full'>Jurusan</h3>
                    </div>
                    <div className='col-span-1 border-[2px] border black py-[3px]'>
                        <h3 className='text-center border-[black] border-[2px] rounded-full'>Jurusan</h3>
                    </div>
                </div>
            </section>
            <section id='body3' className='border-[3px] border-[black] rounded-[20px]'>
                <h1>tambahan</h1>
            </section>
        </section>
    </>
  )
}
