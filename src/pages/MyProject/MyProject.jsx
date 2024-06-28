
import { FaChevronRight } from "react-icons/fa";
import './MyProject.css'
import img1 from '../../assets/project1.png'
import img2 from '../../assets/project2.png'
import img3 from '../../assets/project3.png'



import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const MyProject = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });

    }, []);


    return (
        <section className='' id='project'>
       <div className="bg-black lg:h-screen px-8 md:px-8 lg:px-24 text-white">
       <h2 className='text-3xl lg:text-5xl text-center font-bold mb-2 pt-12 md:pt-0 lg:pt-0'>MY <span className='text-[#29A587] '>PROJECTS</span> </h2>
            <p className="text-center mb-12 text-gray-300">Visit my project and keep your feedback</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  lg:gap-8 pb-8 lg:pb-0 md:pb-0 justify-center items-center'>

                <div>
                    <div className=" p-4  rounded w-[250px] md:w-[300px] lg:w-[400px] h-[400px]   project-img" data-aos="fade-right">
                        <div>
                            <img src={img1} className=" w-[400px] h-[200px] rounded" alt="" />
                            <h3 className="font-bold text-xl text-[#29a587] my-2">New Home </h3>
                            <p className="text-gray-300">We specialize in creating unforgettable experiences that exceed your expectations</p>
                            <div className=" flex justify-between ">
                                <a href="https://apartment-book.netlify.app/">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">See Project</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/apartment-booking-client">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>







                <div>
                    <div className=" p-4  rounded w-[250px] md:w-[300px]  lg:w-[400px]   project-img" data-aos="fade-up">
                        <div className="single-team">
                            <img src={img2} className="w-[400px] h-[200px] rounded" alt="" />

                            <h3 className="font-bold text-xl my-2 text-[#29a587]" >Bridely </h3>
                            <p className="text-gray-300">We specialize in creating unforgettable experiences that exceed your expectations</p>

                            <div className=" flex justify-between ">
                                <a href="https://unique-granita-cbc7da.netlify.app/">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">See Project</p>
                                        <FaChevronRight className='text-xl my-2 ' ></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/event-management">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>




                <div>
                    <div className=" p-4  rounded w-[250px] md:w-[300px] md:mt-4  lg:w-[400px]   project-img" data-aos="fade-up">
                        <div className="single-team">
                            <img src={img3} className="lg:w-[400px] h-[200px] rounded" alt="" />

                            <h3 className="font-bold text-xl my-2 text-[#29a587]" >Vehica </h3>
                            <p className="text-gray-300">We specialize in creating unforgettable experiences that exceed your expectations</p>

                            <div className=" flex justify-between ">
                                <a href="https://brand-shop-d10ed.web.app/">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">See Project</p>
                                        <FaChevronRight className='text-xl my-2 ' ></FaChevronRight>
                                    </div>
                                </a>

                                <a href="https://github.com/aminul157246/brandshop-client">
                                    <div className="card-actions  mt-8 flex items-center hover:text-[#29a587] font-semibold transition-transform transform hover:scale-110 duration-500">
                                        <p className="text-lg">Github</p>
                                        <FaChevronRight className='text-xl'></FaChevronRight>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
       </div>

        </section>
    );
};

export default MyProject;