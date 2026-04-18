import { useAuth } from '@/hook/auth.hook'
import { Spin } from 'antd'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function AuthGuard({
    children
} :  {children: React.ReactNode}) {
    
    const { isLogin, isLoading } = useAuth()
    
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

    if (!isLogin) {
        return <Navigate to="/login" />
    }

    return (isLogin) ? <>{children}</> : <Navigate to="/login" />
}

export default AuthGuard