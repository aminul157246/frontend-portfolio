import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-black text-white text-center -my-12 " style={{ boxShadow: '0 0 1px gray' }}>
            <footer className="footer footer-center   rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a href="#about" className="link link-hover">About </a>
                    <a href="#skill" className="link link-hover">Skills</a>
                    <a href="#project" className="link link-hover">Project</a>
                    <a href="#blog" className="link link-hover">Blog </a>
                </nav>
                <nav>
                    <div className="flex gap-4   items-center">

                        <a href="https://github.com/aminul157246">
                            <FaGithub className="text-xl "></FaGithub>
                        </a>
                        <a href="https://www.linkedin.com/in/aminulislam157246/">
                            <FaLinkedinIn className="text-xl text-blue-500"></FaLinkedinIn>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebook className="text-xl text-blue-800"></FaFacebook>
                        </a>
                        <a href="https://twitter.com/aminul157246"> <RiTwitterXLine className="text-xl "></RiTwitterXLine>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;