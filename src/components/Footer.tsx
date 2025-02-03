
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

interface SocialLink {
  id: number;
  icon: JSX.Element;
  url: string;
}


const socialLinks: SocialLink[] = [
  {
    id: 1,
    icon: <FiGithub className="text-customGrey" />,
    url: "https://github.com/boobaGreen",
  },
  {
    id: 2,
    icon: <FiTwitter className="text-customGrey" />,
    url: "https://twitter.com/claudiodal8444",
  },
  {
    id: 3,
    icon: <FiLinkedin className="text-customGrey" />,
    url: "https://www.linkedin.com/in/claudio-dall-ara-730aa0302/",
  },
];


function Footer(): JSX.Element {
 
  const currentYear = new Date().getFullYear();

 
  return (
    <div className="w-full font-press-start ">
      <div className="flex flex-col items-center justify-center w-full ">
        <p className="mt-1 text-xs md:text-sm text-customGrey text-center">
          Dall'Ara Claudio Copyright © {currentYear}
        </p>
        <div className="flex justify-center w-auto">
          <ul className="flex gap-2 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="p-2 duration-300 rounded-lg shadow-sm cursor-pointer hover:animate-spin-slow"
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
