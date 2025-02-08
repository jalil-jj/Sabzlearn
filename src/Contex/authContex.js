import { createContext } from 'react'



const AuthContext = createContext({
    logedIn: false,
    token: null,
    userInfos: null,
    login: () => {},
    logout: () => {}
})




export default AuthContext