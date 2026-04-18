import { useAuth } from '@/hook/auth.hook'
import { Spin } from 'antd'
import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminGuard({ children }: {
    children: React.ReactNode
}) {
    const { isAdmin, isLoading } = useAuth()
    console.log(isAdmin, isLoading);
    
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
    return (
        (isAdmin)? <>{children}</> : <Navigate to={"/login"}/>   
    )
}

export default AdminGuard