import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import InstituteRegistrationHeader from "./InstituteRegistrationHeader"

const InstituteRegistrationLayout = () => {
    return (
        <main className="App">
            <InstituteRegistrationHeader />
            <Outlet />
            <Footer />
        </main>
    )
}

export default InstituteRegistrationLayout