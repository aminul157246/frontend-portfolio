import { BsDownload } from "react-icons/bs";
import aboutImg from '../../assets/about-img.png';
import './about.css'
const About = () => {
    return (
        <section id="about">
            {/* <div className="lg:h-screen pt-12 px-8 lg:px-12 text-white bg-black">
                <div className=''>
                    <h2 className='text-3xl lg:text-5xl text-center font-bold mb-8'>ABOUT <span className='text-[#29A587] '>ME</span></h2>
                    <div className='flex-row lg:flex  justify-center items-center'>

                        <div className=' lg:flex-1 flex-row px-8 lg:flex justify-center items-center lg:border-l-2 border-[#29A587]'>
                            <div data-aos="fade-right ">
                                <img className='lg:w-[400px] about-profile ' src={aboutImg} alt="" />

                            </div>

                        </div>


                        <div className='lg:flex-1 px-3 mt-6 lg:mt-0 lg:p-0' data-aos="fade-left">
                            <h2 className="text-xl lg:text-3xl font-bold mb-3 text-gray-300">So, Who am I..?</h2>
                            <p> I have found my passion in web development. I love spending time coding and enjoy exploring new things. I have a lots of interest in machine learning and artificial intelligence.I am currently pursuing my graduation in Electrical Engineering at University of Chittagong</p>
                            <div className='pt-4'>
                                <a href='https://drive.google.com/file/d/1Wske4VVmb4rFHliOw1G0QkDrnxR5bSZD/view?usp=sharing' download >
                                    <div className="pb-12 lg:pb-0">
                                        <button className="about-button "   >
                                            <div className="flex  gap-2  justify-center items-center" >
                                                <BsDownload className='up-down-animation font-bold text-xl'></BsDownload>
                                                Download Resume
                                            </div>
                                        </button >
                                    </div>

                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

            <div className="bg-black text-white px-8  lg:px-32 pt-12   ">
                <h2 className='text-3xl lg:text-5xl text-center font-bold mb-8'>ABOUT <span className='text-[#29A587] '>ME</span></h2>
                <div className="flex-row md:flex md:gap-12  lg:flex justify-center items-center">
                    <div className="lg:w-1/2 py-8">
                        <img className=' lg:w-[400px] hover:scale-105 hover:-translate-y-2 transition-transform duration-300   about-profile ' src={aboutImg} alt="" />
                    </div>
                    <div className="md:1/2 lg:w-1/2">
                        <h2 className="text-xl lg:text-3xl font-bold mb-3 text-gray-300">So, Who am I..?</h2>
                        <p> I have found my passion in web development. I love spending time coding and enjoy exploring new things. I have a lots of interest in machine learning and artificial intelligence.I am currently pursuing my graduation in Electrical Engineering at University of Chittagong</p>
                        <div className='pt-4'>
                            <a href='https://drive.google.com/file/d/1Wske4VVmb4rFHliOw1G0QkDrnxR5bSZD/view?usp=sharing' download >
                                <div className="pb-12 lg:pb-0">
                                    <button className="about-button "   >
                                        <div className="flex  gap-2  justify-center items-center" >
                                            <BsDownload className='up-down-animation font-bold text-xl'></BsDownload>
                                            Download Resume
                                        </div>
                                    </button >
                                </div>

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;