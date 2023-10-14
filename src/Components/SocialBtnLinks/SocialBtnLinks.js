import { AppleIcon } from "../icons/AppleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GoogleIcon } from "../icons/GoogleIcon";

export const SocialBtnLinks = ({ icon = "google", text }) => {
    switch (icon) {
        case "google":
            return (
                <button className="sign-up-social-btn">
                    <span className="small-icon">
                        <GoogleIcon />
                    </span>
                    <p className="text-[8px]">{text}</p>
                </button>
            );
        case "facebook":
            return (
                <button className="sign-up-social-btn">
                    <span className="small-icon">
                        <FacebookIcon />
                    </span>
                    <p className="text-[8px]">{text}</p>
                </button>
            );
        case "apple":
            return (
                <button className="sign-up-social-btn">
                    <span className="small-icon">
                        <AppleIcon />
                    </span>
                    <p className="text-[8px]">{text}</p>
                </button>
            );
        default:
            return <></>;
    }
};
