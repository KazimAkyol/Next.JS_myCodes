import React, { createContext } from 'react'




//* auth(firebase) islemlerini yapacagimiz context alani actik:
export const YetkiContext = createContext()

const AuthContextProvider = ({children}) => {
  return (
    <YetkiContext.Provider value={{}}>
        {children}
    </YetkiContext.Provider>
  )
}

export default AuthContextProvider