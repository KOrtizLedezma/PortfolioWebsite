import Link from "next/link";

const NavLink = ({ href, title }) => {

  console.log(href)
  return (
    <Link
      href={href}
      className="menu_item"
    >
      {title}
    </Link>
  );
};

export default NavLink;