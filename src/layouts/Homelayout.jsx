import { Outlet } from "react-router-dom";
import Header from "../compnents/Header";
import LatestNews from "../compnents/LatestNews";
import Navber from "../compnents/Navber";
import LeftNavber from "../layout-components/LeftNavber";
import RightNav from "../layout-components/RightNav";

const Homelayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto mb-5">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto">
                <Navber></Navber>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4">
                <aside className="left col-span-3">
                    <LeftNavber></LeftNavber>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default Homelayout;