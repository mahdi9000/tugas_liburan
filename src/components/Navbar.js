import React from 'react'
import { Button } from './'
import { IoLogOutOutline, IoAddOutline } from 'react-icons/io5'
import { useHistory, Link } from 'react-router-dom'

export default function Navbar () {
  const history = useHistory()

  const logoutButton = () => {
    localStorage.clear()
    history.push('/login')
  }

  const addTodo = () => {
    history.push('/todo')
  }

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-6 py-3 md:flex">

        <div className="w-full hidden md:flex md:items-center md:justify-between">
          <div>
            <Link to='/'>
              <p className="cursor-pointer text-gray-800 dark:text-white text-xl font-bold md:text-2xl hover:text-gray-700 dark:hover:text-gray-300" href="#">JS Todos</p>
            </Link>
          </div>

          <div className="flex flex-col -mx-4 px-2 py-3 md:flex-row md:mx-0 md:py-0">
            <Button
              icons={<IoAddOutline size={24} />}
              btnName="Add Todo"
              onClick={addTodo}
            />

            <Button
              icons={<IoLogOutOutline size={24} />}
              btnName="Logout"
              onClick={logoutButton}
            />

          </div>
        </div>
      </div>
    </nav>
  )
}