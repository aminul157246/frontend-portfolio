import Marquee from "react-fast-marquee";

import img1 from '../../assets/html.png'
import img2 from '../../assets/css.png'
import img3 from '../../assets/js.png'
import img4 from '../../assets/react.png'
import img5 from '../../assets/nodejs.png'
import img6 from '../../assets/mongo.png'
import img7 from '../../assets/fire-base.png'
import img8 from '../../assets/github.jpeg'
import img9 from '../../assets/ver.png'
import img10 from '../../assets/tail.png'
import img11 from '../../assets/vite.jpeg'
import img12 from '../../assets/figma.jpeg'

const Skills = () => {
    return (
        <section id='skill'>
            <div className='bg-black lg:h-screen px-8 lg:px-0 md:px-0 text-white'>
                <h2 className='text-3xl lg:text-5xl text-center font-bold mb-4  '>MY <span className='text-[#29A587] '>SKILLS</span></h2>
                <p className='max-w-4xl mx-auto text-center text-gray-300'>I am proficient in HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB, having completed br multiple projects utilizing these technologies. Additionally, I am experienced with tools like Firebase, Surge, Netlify, and GitHub, enhancing my capability in web development and deployment.</p>

                <Marquee className="mt-8">

                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24 " src={img1} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img2} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img3} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img4} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img5} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img6} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img7} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img8} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img9} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img10} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img11} alt="" />
                    <img className="rounded-lg ml-8 pt-3 w-12 lg:w-24 lg:h-24" src={img12} alt="" />

                </Marquee>





                <div className="py-12 mx-6 lg:mx-12" id="skill">

<div className="grid grid-cols-2 md:grid-cols-3   lg:grid-cols-3 gap-12  lg:p-8">
<div className="text-center up-down-animation " data-aos="fade-right">
<div className="radial-progress  text-[#29A587] " style={{"--value":70}} role="progressbar">70%</div>
<p className="font-bold text-xl">HTML</p>
</div>

<div className="text-center up-down-animation" data-aos="fade-up">
<div className="radial-progress text-[#29A587] " style={{"--value":60}} role="progressbar">60%</div>
<p className="font-bold text-xl">CSS</p>
</div>

<div className="text-center up-down-animation" data-aos="fade-left">
<div className="radial-progress text-[#29A587] " style={{"--value":70}} role="progressbar">60%</div>
<p className="font-bold text-xl">JS</p>
</div>


<div className="text-center up-down-animation" data-aos="fade-right">
<div className="radial-progress text-[#29A587] " style={{"--value":60}} role="progressbar">60%</div>
<p className="font-bold text-xl">React JS</p>
</div>

<div className="text-center up-down-animation" data-aos="fade-up">
<div className="radial-progress text-[#29A587] " style={{"--value":40}} role="progressbar">40%</div>
<p className="font-bold text-xl">Node JS</p>
</div>

<div className="text-center up-down-animation" data-aos="fade-left">
<div className="radial-progress text-[#29A587] " style={{"--value":35}} role="progressbar">35%</div>
<p className="font-bold text-xl">Mongo DB</p>
</div>

</div>
</div>


            </div>





        </section>
    );
};

export default Skills;