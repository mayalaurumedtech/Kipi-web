import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import InstituteDashboardHeader from "./InstituteDashboardHeader"

const InstituteDashboardLayout = () => {
    return (
        <main className="app-container">
            <div className="main-content">
                <InstituteDashboardHeader />

                <Outlet />
            </div>
            <Footer />
        </main>
    )
}

export default InstituteDashboardLayout