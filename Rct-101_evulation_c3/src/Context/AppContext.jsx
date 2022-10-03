import { createContext, useState } from "react";


export const AppContext= createContext()


function AppContextProvider({children}) {
    const [authState,setAuth] =useState({
        isAuth:false,
        token:null
    })
    

    const loginUser=(token)=>{
            setAuth({
                ...authState,
                isAuth:true,
                token:token
            })
    }

    const logoutUser=()=>{
            setAuth({
                ...authState,
                isAuth:false,
                token:null
            })
    }

    return (
        <AppContext.Provider value={{authState,loginUser,logoutUser}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
