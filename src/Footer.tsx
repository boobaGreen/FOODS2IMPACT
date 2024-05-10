import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

interface SocialLink {
  id: number;
  icon: JSX.Element;
  url: string;
}

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

function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full">
      <div className="flex flex-col content-center justify-center ">
        <div className="flex justify-center w-auto">
          <ul className="flex gap-2 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="p-2 duration-300 rounded-lg shadow-sm cursor-pointer "
              >
                <i className="sm:text-lg md:text-xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex justify-center w-auto text-[#454444]">
          <p className="mt-1 text-sm sm:text-base md:text-xl text-[#454444]">
            © {currentYear} Copyright Dall'Ara Claudio
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
