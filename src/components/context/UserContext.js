import React, {useState, createContext} from 'react'

export const UserContext = createContext()

export const UserProvider = (props) => {

  const[answer, setAnswer] = useState(["NO", "NO", "NO", "NO", "NO", "NO", "NO", "NO", "NO"])

  return(
    <UserContext.Provider value={[answer, setAnswer]}>
      {props.children}
    </UserContext.Provider>
  )
}