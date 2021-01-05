import React, { useState, useRef } from 'react'
import Popper from 'popper.js'
import { ButtonText } from './'
import { 
  IoEllipsisHorizontalSharp, 
  IoTrashBinOutline,
  IoPencil 
} from 'react-icons/io5'

import { useHistory } from 'react-router-dom'

const Dropdown = ({ color, data }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const btnDropdownRef = useRef()
  const popoverDropdownRef = useRef()
  const history = useHistory()

  const openDropdown = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-end"
    })
    setShowDropdown(true)
  }

  const closeDropdown = () => {
    setShowDropdown(false)
  }

  let bgColor
  color === 'white'
    ? (bgColor = 'bg-gray-800')
    : (bgColor = `bg-${color}-500`)

  const deleteTodo = () => {
    console.log(`todo with id ${data.id} deleted`);
  }

  const editTodo = () => {
    history.push(`todo/${data.id}`)
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="relative">
            <button
              ref={btnDropdownRef}
              onClick={() => {
                showDropdown 
                  ? closeDropdown()
                  : openDropdown()
              }}

              className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 outline-none focus:outline-none rounded-full hover:bg-gray-300"
              style={{ transition: "all .15s ease" }}
              type="button"
            >
              <IoEllipsisHorizontalSharp size={24} />
            </button>

            <div
              ref={popoverDropdownRef}
              className={
                (showDropdown ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left list-none text-left rounded shadow-lg "
              }
              style={{ minWidth: "10rem" }}
            >
              <ButtonText
                icons={<IoPencil size={20} />}
                btnName="Edit Todo"
                onClick={editTodo}
              />
              <ButtonText
                icons={<IoTrashBinOutline size={23} />}
                btnName="Delete Todo"
                onClick={deleteTodo}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function TodoDropdown ({ data }) {
  return (
    <Dropdown color="white" data={data} />
  )
}