import { Outlet } from "react-router-dom";
import Navber from "../compnents/Navber";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-[#F3F3F3]">
            <header className="py-3 w-11/12 mx-auto">
                <Navber></Navber>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;