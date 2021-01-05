import React from 'react'
import { Navbar } from './'

export default function Layout ({ children }) {
  return (
    <>
      <div className="mb-5">
        <Navbar />
      </div>

      {children}
    </>
  )
}