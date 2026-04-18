import React from 'react'
import { Navigate } from 'react-router-dom';

type ProvideRouteProps = {
    children: React.ReactNode;
}
function ProvideRoute(
    { children }: ProvideRouteProps
) {

    const me = {
        userId: "hjgasdhju1y231281732",
        role: "admin"
    }

    return (
        me.role == "admin" ? children : <Navigate to="/login" />
    )
}

export default ProvideRoute