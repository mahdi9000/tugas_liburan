import React, { useState } from 'react'
import axios from '../config/axios'
import { Layout, Form, Input } from '../components'
import { useHistory } from 'react-router-dom'

export default function AddPage () {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    due_date: "",
    status: "active", // gw default in status ke aktif, ya ntar lu sesuaiin sendiri

  })
  const history = useHistory()

  const btnAddTodo = (e) => {
    e.preventDefault()

    axios({
      url: 'todos',
      method: 'POST',
      data: todo,
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(res => history.push('/'))
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const value = e.target.value

    setTodo({
      ...todo,
      [e.target.name]: value
    })
  }

  return (
    <Layout>
      <Form formName="Add New Todo">
        <Input
          value={todo.title}
          name="title"
          type="text"
          placeholder="Hacktiv Homework"
          labelName="Todo Title"
          onChange={handleChange}
        />

        <Input
          value={todo.description}
          name="description"
          type="text"
          placeholder="Convert Vue.js app into React.js"
          labelName="Todo Description"
          onChange={handleChange}
        />

        <Input
          value={todo.due_date}
          name="due_date"
          type="date"
          placeholder="2020/01/04"
          labelName="Todo Deadline"
          onChange={handleChange}
        />
        
        <button 
          onClick={(event) => btnAddTodo(event)} 
          type="submit" 
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
          Add Todo
        </button>
        
      </Form>
    </Layout>
  )
}