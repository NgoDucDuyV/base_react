import { useAuth } from '@/hook/auth.hook'
import { Spin } from 'antd'
import { Navigate, Outlet } from 'react-router-dom'

function RoleRedirect() {

    const { isLoading, user } = useAuth()
    if (isLoading) {
        return (
            <>
                <div className='flex items-center justify-center h-screen'>
                    <h3>Loading...</h3>
                    <Spin size='large' />
                </div>
            </>
        )
    }
    

    if (location.pathname === "/") {
        switch (user?.sub) {
            case "1":
                return <Navigate to="/admin"/>
            case "2":
                return <Outlet/>
            default:
                return <Navigate to="/"/>
        }
    }
    
    return (
        <Outlet/>
    )
}

export default RoleRedirect