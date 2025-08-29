import { NavLink } from "react-router-dom";

const navigation = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Contact Us", path: "/contact" },
];

interface NavigationLinksProps {
  onClick?: () => void;
  isMobile?: boolean;
}

const NavigationLinks: React.FC<NavigationLinksProps> = ({
  onClick,
  isMobile = false,
}) => {
  return (
    <>
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={onClick}
          className={({ isActive }) =>
            isActive
              ? `border border-gray-200 rounded-full px-5 py-2.5 ${
                  isMobile ? "block" : ""
                }`
              : `hover:bg-amber-400/50 hover:text-white rounded-full px-5 py-2.5 ${
                  isMobile ? "block" : ""
                }`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </>
  );
};

export default NavigationLinks;
