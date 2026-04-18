import { Outlet } from 'react-router-dom'
import Header from '../../components/client/layout/header/Header'
import Footer from '../../components/client/layout/footer/Footer'
import { SearchProvider } from '@/contexts/client/search.contex'
import { CartProvider } from '@/contexts/client/cart.context'
import { Toaster } from 'sonner'

function ClientLayout() {
    return (
        <CartProvider>
            <Toaster richColors position="top-right" />
            <SearchProvider>
                <div className='min-h-screen flex flex-col'>
                    <Header />
                    {/* out chuyen trang */}
                    <Outlet />
                    {/* footer */}
                    <Footer />
                </div>
            </SearchProvider>
        </CartProvider>
    )
}

export default ClientLayout