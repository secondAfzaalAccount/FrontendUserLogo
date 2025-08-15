import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#415a7727] w-full text-black  py-8 px-4 mt-12 rounded-sm ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="div1 font-[logoFont]  text-2xl text-[var(--heading-color)]">Logo.</h2>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2 text-[var(--heading-color)]">Quick Links</h3>
          <div className="space-y-1 text-sm flex flex-col gap-2 text-gray-400">
            <Link to={"/"} className="hover:text-[var(--heading-color)]">
              Home
            </Link>
            <Link to={"/collections"} className="hover:text-[var(--heading-color)]">
              Collections
            </Link>
            <Link to={"/about"} className="hover:text-[var(--heading-color)]">
              About
            </Link>
            <Link to={"/contact"} className="hover:text-[var(--heading-color)]">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-2 text-[var(--heading-color)]">Follow Us</h3>
          <div className="flex justify-center flex-wrap sm:justify-start space-x-4 overflow-hidden text-gray-400">
            <a href="#" className="hover:text-[var(--heading-color)] ">
              Facebook
            </a>
            <a href="#" className="hover:text-[var(--heading-color)] ">
              Instagram
            </a>
            <a href="#" className="hover:text-[var(--heading-color)] ">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
