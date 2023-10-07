import { Link } from "react-router-dom";

export const LinkSocial = ({ link, icon }) => {
  return (
    <Link className="cursor-pointer text-[#FF6231]" to={link}>
      {icon}
    </Link>
  );
};
