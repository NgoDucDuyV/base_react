import type { IUser } from "@/types/auth.type"
import { useEffect, useState } from "react"
import  { jwtDecode, type JwtPayload } from "jwt-decode"
export const useAuth = () => {
    const [user, setUser] = useState<IUser>()
    const [isLoading, setLoading] = useState<boolean>(true)
    const [isLogin, setIsLogin] = useState<boolean>(false)
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    useEffect(() => {
        const accessToken = sessionStorage.getItem("accessToken");

        if (!accessToken) {
            setLoading(false)
            return
        }
        const now = Date.now()/1000
        const jwtcode = jwtDecode<JwtPayload>(accessToken)
        console.log(jwtcode);
        if (jwtcode.exp && jwtcode.exp > now) {
            setIsLogin(true)
            setUser(jwtcode as IUser)
            if (jwtcode.sub == "1") {
                setIsAdmin(true)
            }
        }
        setLoading(false)
    }, [])

    return {
        isLoading,
        isLogin,
        isAdmin,
        user
    }
}