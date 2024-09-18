import { Outlet } from "react-router-dom";
import InstituteDashboardHeader from "./InstituteDashboardHeader";

const InstituteDashboardLayout = () => {
    return (
        <main className="app-container">
            <div className="main-content">
                <InstituteDashboardHeader />

                <Outlet />
            </div>
        </main>
    )
}

export default InstituteDashboardLayout