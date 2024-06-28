
import profileImg from '../../assets/profile.png'
import './hero.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const Hero = () => {
    return (
        <section id='banner'>
            <div className=' bg-black pt-12  gap-10 flex-row md:flex  lg:flex wrapper justify-center items-center px-8 lg:px-12 text-white md:h-screen lg:h-screen '>
                <div className='  lg:w-2/5'>
                    <h2 className='text-lg tracking-widest'>Hello,  <span className='text-[#29A587]'>My name is</span></h2>
                    <h1 className='uppercase  text-3xl lg:text-7xl my-3 font-bold '>AMINUL ISLAM</h1>
                    <h4 className=' font-semibold my-2 text-3xl'>I'm a <span>Frontend Developer</span></h4>    
                    <p className="text-sm">I enjoy building solid and scalable frontend products  that <br /> offer  great  <span className="font-bold">user experiences</span>.</p>


                    <div className="  pt-6">
                        <a href="#contact">
                        <button className="hero-button" >
                                Hire Me
                        </button >
                        </a>
                    </div>



                </div>
                <div className='pt-12 lg:w-2/5 pb-12 lg:pb-0 lg:pl-16'>
                    <img className=' w-[500px] profile  hover:scale-105 hover:-translate-y-2 transition-transform duration-300' src={profileImg} alt="" />
                </div>

                <div className="hidden  lg:block up-down-animation flex-row border-r-[1px] border-[#29A587] mt-72">

                    <li><a href="https://github.com/aminul157246">
                        <FaGithub className="text-xl "></FaGithub>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/aminulislam157246/">
                        <FaLinkedinIn className="text-xl mt-2 text-blue-500"></FaLinkedinIn>
                    </a></li>
                    <li><a href="https://web.facebook.com/profile.php?id=100049235346943"> <FaFacebookF className="text-xl mt-2 text-blue-800"></FaFacebookF>
                    </a></li>
                    <li><a href="https://twitter.com/aminul157246"> <RiTwitterXLine className="text-xl mt-2 "></RiTwitterXLine>
                    </a></li>
                </div>

            </div>
        </section>
    );
};

export default Hero;