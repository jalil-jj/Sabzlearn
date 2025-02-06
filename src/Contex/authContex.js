import { createContext } from 'react'



const AuthContex = createContext({
    logedIn: false,
    token: null,
    userInfos: null,
    login: () => { },
    logout: () => { }
})




export default AuthContex