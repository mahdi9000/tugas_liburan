import React from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Dropdown } from './'

export default function Card ({ data }) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-300 p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex ">
            <h2 className="text-lg font-bold title-font"> {data.title} </h2>
          </div>

          <div className="flex">
            <Dropdown data={data}/>
          </div>
        </div>
        <p className="leading-relaxed text-base">{data.description}</p>
        <p className="leading-relaxed text-base">{data.status}</p>
        
        <div className="text-center mt-2 leading-none flex justify-between w-full">
          <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
            <svg className=" fill-current w-4 h-4 mr-2 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg>               
            {data.due_date}
          </span>
          <span className=" inline-flex items-center flex leading-none text-sm space-x-5">
            <IoPersonCircleOutline size={24} />
              {data.username}
          </span>
        </div>
      </div>
    </div>   
  )
}