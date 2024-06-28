import Toggle from './Toggle/Toggle';
import logo from '../../assets/loggo.png';
import { RiCornerUpRightDoubleFill, RiTwitterXLine } from "react-icons/ri";
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const Navbar = () => {
    return (
        <div>
            <div className="navbar md:fixed lg:fixed z-10 bg-black py-6 px-8 shadow" style={{ boxShadow: "0 0 1px gray" }}>
                <div className="navbar-start">
                    <a className='w-48 pl-12 pt-2' href='/'> <img src={logo} alt="" /> </a>

                    <Toggle />
                </div>
                
                <div className="navbar-end">
                    <div className="hidden   lg:flex gap-4  text-white pr-12  items-center">

                        <a className='hover:scale-125 hover:-translate-y-2o transition-transform duration-300' href="https://github.com/aminul157246">
                            <FaGithub className="text-xl "></FaGithub>
                        </a>
                        <a className='hover:scale-125 hover:-translate-y-2o transition-transform duration-300 text-xl' href="https://www.linkedin.com/in/aminulislam157246/">
                            <FaLinkedinIn className="text-xl text-blue-500"></FaLinkedinIn>
                        </a>
                        <a className='hover:scale-125 hover:-translate-y-2o transition-transform duration-300 text-xl' href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebook className="text-xl text-blue-800"></FaFacebook>
                        </a>
                        <a className='hover:scale-125 hover:-translate-y-2o transition-transform duration-300 text-xl' href="https://twitter.com/aminul157246"> <RiTwitterXLine className="text-xl "></RiTwitterXLine>
                        </a>
                    </div>
                    <a className='text-[#29A587] lg:text-xl text-sm font-semibold flex   items-center gap-2' href='#contact'>Let's Talk <span className='font-bold lg:text-2xl'><RiCornerUpRightDoubleFill /></span></a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;