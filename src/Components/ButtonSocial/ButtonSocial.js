import { AppleIcon } from "../icons/AppleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { GoogleIcon } from "../icons/GoogleIcon";

export const ButtonSocial = ({ icon = "google" }) => {
    switch (icon) {
        case 'google':
            return <button className="hover:shadow-md duration-300 transition-shadow relative border rounded-full w-[50px] h-[50px]">
                <span className="absolute top-[1px] right-[50%] translate-y-[50%] translate-x-[50%]"><GoogleIcon /></span>
            </button>;
        case 'facebook':
            return <button className="hover:shadow-md duration-300 transition-shadow relative border rounded-full w-[50px] h-[50px]">
                <span className="absolute top-0 right-[49%] translate-y-[50%] translate-x-[50%]"><FacebookIcon /></span>
            </button>
        case 'apple':
            return <button className="hover:shadow-md duration-300 transition-shadow relative border rounded-full w-[50px] h-[50px]">
                <span className="absolute -top-[4px] right-[50%] translate-y-[50%] translate-x-[50%]"><AppleIcon /></span>
            </button>
        default: return <></>
    }

}