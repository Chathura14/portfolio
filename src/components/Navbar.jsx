import logo from "../assets/cplogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="w-25" src={logo} alt="logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/chathuraprageeth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700"
                >
                    <FaLinkedin />
                </a>
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    );
};

export default Navbar;
