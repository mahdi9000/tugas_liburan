import React from 'react'

export default function Form ({ children, formName }) {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 className="text-xl font-semibold text-center">{formName}</h1>
        <form className="mt-6">
          {children}
          
        </form>
      </div>
    </div>
  )
}