import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <main className="app-container">
            <div className="main-content">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default Layout