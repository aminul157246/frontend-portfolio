
import profileImg from '../../assets/Untitled design (4).png'
import './homepage.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
const HomePage = () => {
    return (
        <section id='banner'>
            <div className=' bg-black pt-12 gap-10 flex wrapper justify-center items-center px-12  text-white h-screen '>
                <div className='  w-2/5'>
                    <h4 className='text-lg'>Hello,  <span className='text-[#29A587]'>My name is</span></h4>
                    <h1 className='uppercase  text-7xl my-3 font-bold '>AMINUL ISLAM</h1>
                    <p className='text-2xl font-semibold mb-2 font-jost'>I'm a Frontend Developer</p>
                    <p className="text-sm">I enjoy building solid and scalable frontend products  that <br /> offer  great  <span className="font-bold">user experiences</span>.</p>


                    <div className="  pt-6">
                    <button className="hover:bg-[#29A587] hover:text-white bg-white style-btn px-4 py-4 text-black font-semibold duration-700"   >
                                    <div className="flex gap-2  justify-center items-center" >
                                        
                                        Hire Me 
                                    </div>
                                </button >
                    </div>



                </div>
                <div className=' 2/5 pl-16'>
                    <img className='w-[500px] profile  hover:scale-105 hover:-translate-y-2 transition-transform duration-300' src={profileImg} alt="" />
                </div>

                <div className="up-down-animation flex-row border-r-[1px] border-[#29A587] mt-72  pl-12 1/5">

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

export default HomePage;