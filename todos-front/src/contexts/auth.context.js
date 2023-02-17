import { createContext, useState, useEffect } from "react";

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [loggedInUser, setLoggedInUser] = useState({})

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')
    const parsedUser = JSON.parse(storedUser)

    if (parsedUser.user) {
      setLoggedInUser({ ...parsedUser })
    }

  }, [])


  return (
    <AuthContext.Provider value={{loggedInUser, setLoggedInUser}}>
      { props.children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }