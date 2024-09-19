import { Outlet } from "react-router-dom";
import InstitutedHeader from "./InstitutedHeader";
import { createContext, useState } from "react";
import InstituteSideBar from "./InstituteSideBar";

const MyContext = createContext();

const InstituteLayout = () => {
    const [isToggleSidebar, setIsToggleSidebar] = useState(false);
    const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);

    const values = {
        isToggleSidebar,
        setIsToggleSidebar,
        isHideSidebarAndHeader,
        setIsHideSidebarAndHeader,
    }

    return (
        <main className="app-container">
            <div className="main-content">
                <MyContext.Provider value={values}>
                    {
                        !isHideSidebarAndHeader &&
                        <div className={`sideBarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
                            <InstitutedHeader />
                        </div>
                    }
                    <div className="main flex gap-3 max-w-[1920px] mx-auto pt-20 px-7">
                        {
                            !isHideSidebarAndHeader &&
                            <div className={`sideBarWrapper ${isToggleSidebar ? 'toggle' : ''}`}>
                                <InstituteSideBar />
                            </div>
                        }
                        <div className={`content ${isHideSidebarAndHeader ? 'fullWidth' : ''} ${isToggleSidebar ? 'toggle' : ''}`}>
                            <Outlet />
                        </div>
                    </div>
                </MyContext.Provider>
            </div >
        </main >
    )
}

export default InstituteLayout;
export { MyContext }