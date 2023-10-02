import { Link } from "react-router-dom"
import { LogoSmall } from "../Logo/Logo"
import { LinkSocial } from "../LinkSocial/LinkSocial"
import { footerLinks } from "../../utils/constants"
import { FacebookLink } from "../icons/FacebookIcon"
import { TwitterLink } from "../icons/Twitter"
import { InstagramLink } from "../icons/Instagram"

export const Footer = () => {
    return <footer className="bg-[#266F62] py-[20px]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-[14px] font-[400] text-white">
            <div className="flex items-center gap-[15px]">
                <LogoSmall />
                <p>Copyright © 2023 S-Terra Soft</p>
            </div>
            <div className="flex items-center gap-[30px]">
                <ul className="flex flex-col md:flex-row gap-[15px]">
                    {footerLinks.map(({ text, link }) => (
                        <li key={text}>
                            <Link to={link}>{text}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex gap-[10px]">
                    <LinkSocial link='/' icon={<FacebookLink />} />
                    <LinkSocial link='/' icon={<TwitterLink />} />
                    <LinkSocial link='/' icon={<InstagramLink />} />
                </div>
            </div>
        </div>
    </footer>
}
