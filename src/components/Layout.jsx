import { Outlet } from "react-router-dom"
import SideMenu from "./sidebar/SideMenu"
import Header from "./header/Header"


const Layout = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ display: "flex" }} >
                <div>
                    <SideMenu />
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout