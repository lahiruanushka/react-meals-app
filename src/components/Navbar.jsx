import { Link } from "react-router-dom";
import {
  HomeIcon,
  BookmarkIcon,
  ListBulletIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/cutlery.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img alt="Logo" src={logo} className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">Meals App</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <NavItem to="/" icon={HomeIcon} label="Home" />
          <NavItem to="/favorites" icon={BookmarkIcon} label="Favorites" />
          <NavItem to="/categories" icon={ListBulletIcon} label="Categories" />
          <NavItem
            to="/ingredients"
            icon={ClipboardDocumentListIcon}
            label="Ingredients"
          />
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({ to, icon: Icon, label }) => (
  <Link
    to={to}
    className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors duration-200"
  >
    <Icon className="h-5 w-5 mr-2" aria-hidden="true" />
    {label}
  </Link>
);
