import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
            <nav className="flex justify-between px-16 py-3 items-center ">
        <h1 className="text-2xl">.HouRent</h1>
        <div className="flex items-center gap-3">
          <h5 className="text-gray-700 text-xl">advertize</h5>
          <div className="flex border p-1 rounded-xl">
            <img
              src="https://img.icons8.com/?size=100&id=21441&format=png&color=000000"
              alt=""
              className="h-8 w-8"
            />
          </div>
        </div>
      </nav>
      <div className="px-16 flex justify-center py-3 border">
        <ul className="flex gap-6">
          <li>
            <Link href="./ShortTerm" className="text-xl">
              Short Term
            </Link>
          </li>
          <li>
            <Link href="./LongTerm" className="text-xl">
              Long Term
            </Link>
          </li>
          <li>
            <Link href="./MyProperty" className="text-xl">
              My Property
            </Link>
          </li>
          <li>
            <Link href="" className="text-xl">
              Inbox
            </Link>
          </li>
          <li>
            <Link href="" className="text-xl">
              Favorites
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className='text-center text-4xl my-10 font-serif'>List your house for renting</h1>
      </div>
      <div className='flex items-center justify-center h-[66vh] gap-4'>
      <div className='border px-20 py-36  rounded-lg bg-gray-200 border-gray-400'>
            <h4 className='text-5xl text-black'>SHORT TERM RENTAL</h4>
        </div>
        <div className='border px-20 py-36  rounded-lg bg-gray-200 border-gray-400'>
            <h4 className='text-5xl text-black'>LONG TERM RENTAL</h4>
        </div>
      </div>
    </div>
  )
}

export default page
