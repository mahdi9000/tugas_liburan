import React, { useState, useEffect } from 'react'
import { Card, Layout } from '../components'
import axios from '../config/axios'

export default function HomePage () {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)

    axios({
      url: 'todos',
      method: 'GET',
      headers: {
        access_token: localStorage.getItem('access_token')
      }
    })
      .then(({ data }) => {
        setTodos(data)
        console.log(data);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <Layout>
      {
        loading
          ? <h1>Loading ....</h1>
          : todos.map(el => {
              return (
                <Card key={el.id} data={el} />
              )
            })
      }

    </Layout>
  )
}