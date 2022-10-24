import React, { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext();

const AuthContextProvider = ({children}) => {
  const [dark, setDark] = useState(false);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user"))||null);
  
  const UserLogin = ()=>{
    //To do
    setCurrentUser({id:8, name: "Sunim Lama", username: "@sunim99", pp:"https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=600"});
  }

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <Context.Provider value={{currentUser, UserLogin, dark, setDark}}>
      {children}
    </Context.Provider>
  )
}

export default AuthContextProvider
export const useAuthContextApi = ()=> useContext(Context);