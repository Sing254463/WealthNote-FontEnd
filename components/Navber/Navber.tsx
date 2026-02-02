// import links from "./Links"

import Links from "./Links";
import { IoLogInOutline } from "react-icons/io5";
const Navber = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <a href="/dashboard" className="text-white font-bold text-xl mx-2">
              WealthNote
            </a>
            {Links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white mx-2"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div>
            <a
              href="/login"
              className="text-gray-300 hover:text-white font-bold text-2xl"
            >
              <samp>
                <IoLogInOutline />
              </samp>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navber;
