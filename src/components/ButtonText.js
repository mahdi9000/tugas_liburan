import React from 'react'

export default function ButtonText ({ onClick, btnName, icons}) {
  return (
    <button 
      className="active:bg-gray-100 flex items-center text-sm font-normal w-full whitespace-no-wrap bg-transparent hover:bg-gray-100" 
      type="button" 
      style={{ transition: "all .15s ease" }}
      onClick={onClick}
    >
      {icons}
      <span className="mx-1">{btnName}</span>
    </button>
  )
}