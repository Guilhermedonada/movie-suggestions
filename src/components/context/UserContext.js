import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {

  const[answer, setAnswer] = useState([])

  return(
    <UserContext.Provider value={[answer, setAnswer]}>
      {props.children}
    </UserContext.Provider>
  )
}