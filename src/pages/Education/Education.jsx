import './education.css';


const TimelineEvent = ({ event, isLeft }) => (
  <div className="up-down-animation">
    <div className={`mb-16 flex ${isLeft ? 'flex-row-reverse' : ''}`}>
      <div className={`relative md:w-1/2 lg:w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <div className="p-6 bg-white rounded-lg shadow-lg ">
          <span className="text-sm font-semibold text-teal-600">{event.date}</span>
          <h3 className="mt-2 mb-2 text-lg font-bold text-gray-800">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
      <div className="relative md:w-1/2 lg:w-1/2 flex justify-center">
        <div className="absolute w-6 h-6 bg-white rounded-full border-4 border-teal-600 flex items-center justify-center shadow-lg">
          <svg
            className="w-4 h-4 text-teal-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 7v-7m-4 4h8"
            ></path>
          </svg>
        </div>
        <div className={`w-px h-full bg-teal-600 ${isLeft ? '-mr-3' : '-ml-3'}`}></div>
      </div>
    </div>
  </div>
);

// Timeline component wrapping all events
const Timeline = ({ events }) => {
  return (
    <div className="relative max-w-5xl mx-auto mt-12 p-6">
      <div className="absolute inset-0 w-full h-full bg-pattern-dots opacity-10 rounded-xl pointer-events-none"></div>
      <div className="relative border-l-2 border-teal-600">
        {events.map((event, index) => (
          <TimelineEvent key={index} event={event} isLeft={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};


const Education = () => {

  const educationEvents = [

    {
      date: '2022 - PRESENT',
      title: 'Bachelor of Science in Electrical and Electronics Engineering (BSc in EEE)',
      description: 'Graduate BSc in Electrical and Electronics Engineering (EEE) in University of Chittagong, specializing in power systems and electronics, with hands-on project experience.',
    },
    {
      date: '2019',
      title: 'Secondary School Certificate (SSC)',
      description: 'Completed SSC with a focus on Science subjects, excelling in Mathematics and Physics.',
    },
    {
      date: '2021',
      title: 'Higher Secondary Certificate (HSC)',
      description: 'Graduated from HSC with high marks in Science, particularly in Chemistry and Biology.',
    },

  ];



  return (
    <section id='education'>
      <div className="min-h-screen bg-black text-white py-12">
        <h2 className='text-3xl lg:text-5xl text-center font-bold mb-8'>MY <span className='text-[#29A587] '>EDUCATIONAL</span> JOURNEY</h2>
        <Timeline events={educationEvents} />
      </div>
    </section>
  );
};

export default Education;