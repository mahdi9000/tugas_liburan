import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage, LoginPage, EditPage, AddPage } from './pages'
import { useHistory } from 'react-router-dom'

function App() {
  const history = useHistory()

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history.push('/login')
    } else if (!localStorage.getItem('access_token')) {
      history.push('/')
    }
  }, [])
  
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      
      <Route exact path='/login'>
        <LoginPage />
      </Route>
      
      <Route exact path='/todo'>
        <AddPage />
      </Route>
      <Route path='/todo/:id'>
        <EditPage />
      </Route>
    </Switch>
  );
}

export default App;
