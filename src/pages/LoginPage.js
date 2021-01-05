import React, { useState } from 'react'
import { Form, Input } from '../components'
import axios from '../config/axios'  
import { useHistory, Link } from 'react-router-dom'

export default function LoginPage () {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value

    setUserData({
      ...userData,
      [e.target.name]: value
    })
  }

  const btnLogin = (e) => {
    e.preventDefault()
    
    axios({
      url: 'login',
      method: 'POST',
      data: userData
    })
      .then(({ data }) => {
        // console.log(data);
        localStorage.setItem('access_token', data.access_token)
        history.push('/')
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div>
      <Form formName="Login">
        <Input
          value={userData.email}
          name="email"
          type="email"
          placeholder="username@mail.com"
          labelName="Email"
          onChange={handleChange}
        />

        <Input
          value={userData.password}
          name="password"
          type="password"
          placeholder="*********"
          labelName="Password"
          onChange={handleChange}
        />
        
        <button 
          onClick={(event) => btnLogin(event)} 
          type="submit" 
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Login
        </button>
        
        {/* Link ke register page */}
        <Link to='/register'>
          <p className="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
        </Link>
      </Form>
    </div>
  )
}