import { useRoutes } from "react-router-dom"
import ClientLayout from "../layouts/client/ClientLayout"
import HomePage from "../pages/client/home/HomePage"
import AdminLayout from "@/layouts/admin/AdminLayout"
import ProductPage from "@/pages/admin/products/ProductPage"
import ProductAdd from "@/pages/admin/products/ProductAdd"
import ProductEdit from "@/pages/admin/products/ProductEdit"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
// import AdminGuard from "@/components/AdminGuard"

function AppRouter() {
    const router = useRoutes([
        {
            path: "/admin", element: <AdminLayout />, children: [
                {
                    index: true, path: "", Component: ProductPage
                },
                {
                    path: "products", Component: ProductPage
                },
                {
                    path: "products/add", Component: ProductAdd
                },
                {
                    path: "products/edit/:id", Component: ProductEdit
                }
            ]
        },

        {
            path: "/", Component: ClientLayout, children:
                [
                    {
                        path: "/", Component: HomePage
                    }
                ]
        },
        // auth 
        {
            path: "/login", Component: Login
        },
        {
            path: "/register", Component: Register
        },
    ])


    return (
        router
    )
}

export default AppRouter