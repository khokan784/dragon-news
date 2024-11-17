import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center justify-center bg-gray-100 p-2">
            <p className="bg-[#D72050] text-base-200 px-3 -y-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link>
                <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;