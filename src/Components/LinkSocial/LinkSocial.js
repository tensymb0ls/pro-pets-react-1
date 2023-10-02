import { Link } from "react-router-dom"

export const LinkSocial = ({ link, icon }) => {
    return <Link to={link}>{icon}</Link>
}