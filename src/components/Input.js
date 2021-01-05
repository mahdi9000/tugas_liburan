import React from 'react'

export default function Input ({ 
  inputStyles, 
  labelStyles, 
  value, 
  type, 
  name, 
  placeholder, 
  labelName,
  onChange,
}) {
  const defaultLabelStyles = "block mt-2 text-xs font-semibold text-gray-600 uppercase"
  const defaultInputStlyes = "block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
  
  return (
    <>
      <label htmlFor={name} className={labelStyles || defaultLabelStyles}>{labelName}</label>
      <input
        onChange={onChange}
        value={value}
        type={type} 
        name={name}
        placeholder={placeholder}
        // autoComplete="email" 
        className={inputStyles || defaultInputStlyes} 
        required />
    </>
  )
}