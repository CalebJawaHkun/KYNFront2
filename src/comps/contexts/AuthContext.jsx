import { useContext, useEffect, useState, createContext, useMemo } from "react";

const AuthContext = createContext()

export function AuthProvider({children}) {
    
    const API_URL = import.meta.env.VITE_API_URL

    const [authDat, setAuth] = useState({ loggedIn: false, clientData: null })
    const oauthDat = useMemo(async () => {
        if(authDat.loggedIn && authDat.clientData.authType !== 'local') {
            const res = await fetch(
                `${API_URL}/token`,
                {credentials:'include'}
            )
            const data = await res.json()
            console.log(`OAuth Dat: `, data)
            return data
        }

        return ({})
    }, [authDat])

    const [loading, setLoading] = useState(true)
    
    const setStatus = async () => {
        setLoading(true)
        console.log(new Date().toISOString())
        try {
            const res = await fetch(`${API_URL}/status`, {credentials: 'include', cache: 'no-store'})
            // console.log('Status: ', res.status)
            const dat = await res.json()
            //console.log('Status Data received: ', dat)
            //console.log('Updated Login Status: ', dat.loggedIn ? 'Logged In':'Logged Out')
            setAuth(dat)
        } catch(E) {
            console.error('Error trying to fetch stats: ', E)
        } finally {
            setLoading(false)
            // console.log('AuthContext.jsx: Status Fetch completed!')
        }
    }

    useEffect(() => {
        setStatus()
    }, [])

    useEffect(() => {
        // console.log('API URL: ', API_URL)
        if(authDat.loggedIn) {
            console.log('Client Logged In: ', authDat.loggedIn)
        }
    }, [authDat])




    return (
        <AuthContext.Provider value={{authDat, setStatus, loading, setLoading, oauthDat, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default function useAuthContext() { return useContext(AuthContext) }