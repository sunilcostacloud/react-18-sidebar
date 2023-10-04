import { Outlet } from "react-router-dom"
import SideMenu from "./SideMenu"

const Layout = () => {
    return (
        <div style={{ display: "flex" }} >
            <div>
                <SideMenu />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout