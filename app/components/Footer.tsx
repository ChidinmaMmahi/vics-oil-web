import React from "react";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

type socialMediaProps = {
  icon: React.ReactNode;
  link: string;
  color?: string;
};

const socialMedia = [
  {
    icon: <LuInstagram />,
    link: "https://www.instagram.com/vics_oil/",
    color: "hover:text-pink-700",
  },
  {
    icon: <ImFacebook />,
    link: "https://www.facebook.com/vicsoilng/",
    color: "hover:text-blue-700",
  },
  {
    icon: <FaTiktok />,
    link: "https://www.tiktok.com/@vicsoilng/",
    color: "hover:text-black",
  },
];

const SocialMediaLink = ({ icon, link, color }: socialMediaProps) => {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div
          className={`hover:bg-white/10 ${color} rounded-full size-10 flex items-center justify-center transition-all duration-300 cursor-pointer text-xl`}
        >
          {icon}
        </div>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="text-white/90 dark:text-white/50 text-sm">
      <section className="bg-gray-900/95 dark:bg-black py-12 sm:py-28 w-full flex flex-col justify-between px-section">
        <div className="flex flex-col sm:flex-row sm:items-center gap-x-48">
          <NavLink to="/" className="mb-10 sm:mb-0">
            <img
              src="/images/palmfruit-tree-cartoon.png"
              alt="VicsOil Logo"
              className="w-20"
            />
            <p className="text-2xl font-bold">VicsOil</p>
          </NavLink>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MdLocationOn className="text-xl" />
              <p>4, Anifowose Street, Bariga, Lagos State, Nigeria</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-lg" />
              <p>vicsoilng@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-lg" />
              <p>09027184113</p>
            </div>
          </div>
        </div>
        <hr className="my-10 border-white/30" />
        <div className="flex justify-end gap-2">
          <div className="flex items-center gap-1">
            {socialMedia.map((item) => (
              <SocialMediaLink
                icon={item.icon}
                link={item.link}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="text-center bg-gray-900 dark:bg-black py-4 text-xs w-full">
        &copy; 2025 VicsOil. All rights reserverd.
      </div>
    </footer>
  );
};

export default Footer;
