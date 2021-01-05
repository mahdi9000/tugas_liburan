import React, { useEffect, useState } from 'react'
import { Layout, Form, Input } from '../components'
import { useParams, useHistory } from 'react-router-dom'
import axios from '../config/axios'
import moment from 'moment'

export default function EditPage () {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    due_date: moment()
      .locale('en')
      .format('YYYY-MM-DD'),
    status: "",
  })
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const btnEditTodo = (e) => {
    e.preventDefault()

    axios({
      url: `todos/${id}`,
      method: 'PUT',
      headers: {
        access_token: localStorage.getItem('access_token')
      },
      data: todo
    })
      .then(res => history.push('/'))
      .catch(err => console.log(err))
  }
  
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)

    axios({
      url: `todos/${id}`,
      method: "GET",
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        setTodo(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  
  const handleChange = (e) => {
    const value = e.target.value

    setTodo({
      ...todo,
      [e.target.name]: value
    })
  }

  return (
    <Layout>
      <Form formName="Edit Todo">
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
          value={todo.status}
          name="status"
          type="text"
          placeholder="Hacktiv active"
          labelName="Todo Status"
          onChange={handleChange}
        />

        <Input 
          value={todo.due_date}
          name="duedate"
          type="date"
          placeholder="2020/01/04"
          labelName="Todo Due Date"
          onChange={handleChange}
        />

        <button 
          onClick={(event) => btnEditTodo(event)}
          type="submit"
          className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
            Edit Todo

        </button>
        
      </Form>
      {
        loading
          ? <h1>Loading ....</h1>
          : <>
              <p>{JSON.stringify(todo)}</p>
            </>
      }
    </Layout>
  )
}