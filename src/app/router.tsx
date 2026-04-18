import { useRoutes } from "react-router-dom"
import ClientLayout from "../layouts/client/ClientLayout"
import DetailsPage from "../pages/client/Details/DetailsPage"
import HomePage from "../pages/client/home/HomePage"
import CasualPage from "../pages/client/Casual/CasualPage"
import CartPage from "@/pages/client/Cart/CartPage"
import AdminLayout from "@/layouts/admin/AdminLayout"
import ProductPage from "@/pages/admin/products/ProductPage"
import ProductAdd from "@/pages/admin/products/ProductAdd"
import CaregoryPage from "@/pages/admin/caregory/CaregoryPage"
import CaregoryAdd from "@/pages/admin/caregory/CaregoryAdd"
import ProductEdit from "@/pages/admin/products/ProductEdit"
import ProductDetails from "@/pages/admin/products/ProductDetails"
import CregoryEdit from "@/pages/admin/caregory/CregoryEdit"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import AuthGuard from "@/components/AuthGuard"
import AdminGuard from "@/components/AdminGuard"
import RoleRedirect from "@/components/RoleRedirect"

function AppRouter() {
    const router = useRoutes([
        {
            path: "/admin", element:
                <AuthGuard>
                    <AdminGuard>
                        <AdminLayout />
                    </AdminGuard>
                </AuthGuard>,
            children: [
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
                },
                {
                    path: "products/view/:id", Component: ProductDetails
                },

                // cảegory
                {
                    path: "caregories", Component: CaregoryPage
                },
                {
                    path: "caregories/add", Component: CaregoryAdd
                },
                {
                    path: "caregories/edit/:id", Component: CregoryEdit
                },
            ]
        },
        {
            path: "/", Component: ClientLayout, children:
                [
                    {
                        path: "/", Component: HomePage
                    },
                    {
                        path: "/details/:id", Component: DetailsPage
                    },
                    {
                        path: "/casual", Component: CasualPage
                    },
                    {
                        path: "/cart", Component: CartPage
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