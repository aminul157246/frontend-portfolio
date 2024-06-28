import Lottie from "lottie-react";
import emailjs from '@emailjs/browser';
import contact from '../../../public/contact-svg.json';
import { useRef } from "react";
import toast from "react-hot-toast";
import './contact.css'


const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_9t732uu', 'template_pti0icg', form.current, {
                publicKey: 'Pm6Gaa0NCCCL9B1Ri',
            })
            .then(
                () => {
                    toast.success('Sent Successfully !')
                },
                () => {
                    toast.error('Sending Failed')
                },
            );
    };



    return (
        <section id="contact">

            <div className="bg-black text-white lg:h-screen pb-20 md:pb-0 lg:pb-0 px-8" >
            <h2 className='text-3xl lg:text-5xl text-center font-bold pt-12  mb-2'> <span className='text-[#29A587] '>CONTACT</span> WITH ME </h2>
            <p className="text-center text-gray-300">Feel free to in touch with me.  I am always open to discussing <br /> new projects, crate ideas or opportunity to be part of your visions</p>

                <div className="flex-row lg:flex  justify-center gap-10 items-center " >

                    <div className="w-[260px] md:w-[700px] lg:w-[600px] py-4 md:py-0 lg:py-0 ">
                        <Lottie animationData={contact} loop={true} />
                    </div>
                    <div>
                        <form className="text-black lg:pr-12" ref={form} onSubmit={sendEmail}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:pt-24   items-center justify-center">
                                <input className="bg-base-200 rounded-3xl px-2 lg:px-4 py-3" required type="text" placeholder="Your Name" name="form_name" />
                                <input className="bg-base-200 rounded-3xl px-2 lg:px-4 py-3" required type="email" placeholder="Your Email" name="form_email" />
                            </div>

                            <div className="flex justify-center items-center">
                                <textarea className="bg-base-200 rounded-3xl mt-6 p-2 lg:p-4" required placeholder="Your Message" id="" cols="90" rows="5" name="message" />
                            </div>
                            <div className=" lg:pl-6 md:pb-20 flex justify-center items-center md:flex md:justify-center md:items-center mt-6">
                                <button className="contact-btn  "
                                
                                >
                                    Send Message
                                </button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;