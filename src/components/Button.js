import React from 'react'

export default function Button ({ icons, onClick, styles, btnName, type }) {
  const defaultStyle = "bg-blue-400 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
  
  return (
    <button
      className={styles || defaultStyle}
      onClick={() => onClick()}
      style={{ transition: "all .15s ease" }}
      type={type || 'button'}
    >
      {/* Dynamic render icon + text button or only text button */}
      {
        icons 
          ? <i className={icons}></i>
          : <></>
      }
      {btnName}
      {/* <span className="mx-1"></span> */}
      
    </button>
  )
}