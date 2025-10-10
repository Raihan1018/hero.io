import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      color: "hover:text-blue-400",
    },
    {
      name: "X (Twitter)",
      icon: <FaXTwitter />,
      url: "https://x.com",
      color: "hover:text-sky-300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      color: "hover:text-blue-200",
    },
  ];

  // Function to render icons
  const renderSocialIcons = () =>
    socialLinks.map((social, index) => (
      <Link
        key={index}
        to={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        className={`transition-colors ${social.color}`}
      >
        {social.icon}
      </Link>
    ));

  return (
    <footer className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white p-6 sm:p-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
        {/* Left Section: Logo + Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Link to={"/"} className="btn btn-ghost">
            <img className="w-[40px]  md:flex" src={logo} alt="logo" />
            <span className="font-bold text-[16px]">HERO.IO</span>
          </Link>
          <p className="text-sm sm:text-base text-center md:text-left">
            Copyright © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex gap-4 justify-center md:justify-end text-lg">
          {renderSocialIcons()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
