import Link from "next/link";

const NavLink = ({ href, title, icon }) => {
  return (
    <Link href={href} className="flex items-center space-x-2 menu_item">
      <div className="flex align-baseline">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default NavLink;
