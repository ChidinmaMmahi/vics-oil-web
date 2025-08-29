import React from "react";
import { FaTiktok } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { LuInstagram } from "react-icons/lu";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

type socialMediaProps = {
  icon: React.ReactNode;
  link: string;
  color?: string;
};

const socialMedia = [
  {
    icon: <LuInstagram />,
    link: "https://www.instagram.com/vicsoilng/",
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
    <footer className="text-white/90 text-sm">
      <section className="bg-gray-900/95 py-28 w-full flex flex-col justify-between px-section">
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
            <p>+234 813 555 5555</p>
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
      <div className="text-center bg-gray-900 py-4 text-xs w-full">
        &copy; 2025 VicsOil. All rights reserverd.
      </div>
    </footer>
  );
};

export default Footer;
