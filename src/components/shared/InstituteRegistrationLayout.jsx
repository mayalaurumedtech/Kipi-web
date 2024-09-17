import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import InstituteRegistrationHeader from "./InstituteRegistrationHeader"

const InstituteRegistrationLayout = () => {
    return (
        <main className="app-container">
            <div className="main-content">
                <InstituteRegistrationHeader />
                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default InstituteRegistrationLayout