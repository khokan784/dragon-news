import FindUs from "../compnents/FindUs";
import SocialLogin from "../compnents/SocialLogin";

const RightNav = () => {
    return (
        <div className="space-y-5">
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNav;