// Importing necessary libraries and components
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

// Interface for social link data
interface SocialLink {
  id: number;
  icon: JSX.Element;
  url: string;
}

// Array of social link data
const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: <FiGithub color="#454444" />,
    url: "https://github.com/boobaGreen",
  },
  {
    id: 2,
    icon: <FiTwitter color="#454444" />,
    url: "https://twitter.com/claudiodal8444",
  },
  {
    id: 3,
    icon: <FiLinkedin color="#454444" />,
    url: "https://www.linkedin.com/in/claudio-dall-ara-730aa0302/",
  },
];

// Footer component
function Footer(): JSX.Element {
  // Getting the current year
  const currentYear = new Date().getFullYear();

  // Rendering the footer with copyright information and social links
  return (
    <div className="w-full font-press-start ">
      <div className="flex flex-col items-center justify-center w-full ">
        <p className="mt-1 text-xs md:text-sm text-[#454444] text-center">
          Dall'Ara Claudio Copyright © {currentYear}
        </p>
        <div className="flex justify-center w-auto">
          <ul className="flex gap-2 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="p-2 duration-300 rounded-lg shadow-sm cursor-pointer "
              >
                <i className="text-lg md:xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
