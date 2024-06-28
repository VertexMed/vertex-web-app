import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
import Footer from "./Footer";
import Support from "./Support";

export default function Layout(){
    return(    
        <>
            <AppNavBar />
            <Support />
            <Outlet />
            <Footer />
        </>
    )
}