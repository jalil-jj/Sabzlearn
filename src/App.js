import React, { useCallback, useEffect, useState } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import AuthContex from './Contex/authContex'

export default function App() {

  const router = useRoutes(routes)

  const [logedIn, setLogedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [userInfos, setUserInfos] = useState({})

  const login = useCallback((userInfos, token) => {
    setToken(token)
    setLogedIn(true)
    localStorage.setItem('user', JSON.stringify({ token }))
    setUserInfos(userInfos)
  },[])

  const logout = useCallback(() => {
    setToken(null)
    setLogedIn(false)
    setUserInfos({})
    localStorage.removeItem('user')
  })

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('user'))

    if (localStorageData) {
      fetch('http://localhost:4000/v1/auth/me', {
        headers: {
          'Authorization': `Bearer ${localStorageData.token}`
        }
      })
        .then(res => res.json())
        .then(userData => {
          setLogedIn(true)
          setUserInfos(userData)
        })
    }
  }, [login])


  return (

    <AuthContex.Provider value={{
      logedIn,
      token,
      userInfos,
      login,
      logout,
    }}>
      {router}
    </AuthContex.Provider>

  )
}
