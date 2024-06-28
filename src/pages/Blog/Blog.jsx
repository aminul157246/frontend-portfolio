
import './Blog.css';

const Blog = () => {

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with JavaScript: A Beginner’s Guide",
      author: "Aminul Islam",
      date: "March 5, 2024",
      image: "https://i.ibb.co/nDJb7CK/javascript.jpg",
      content: "JavaScript is one of the most popular programming languages in the world. It’s used everywhere, from websites to servers to mobile apps",
      link: 'https://medium.com/@aminul157246/getting-started-with-javascript-a-beginners-guide-f586b3eb2791'
    },
    {
      id: 2,
      title: "A Beginner’s Guide to React.js: Building Dynamic User Interfaces ",
      author: "Aminul Islam",
      date: "March 10, 2024",
      image: "https://i.ibb.co/2K275YF/reactjs.jpg",
      content: "React.js, often just called React, is a powerful JavaScript library for building user interfaces, particularly for single-page applications...",
      link: 'https://medium.com/@aminul157246/a-beginners-guide-to-react-js-building-dynamic-user-interfaces-eaaf84f23d74'
    },
    {
      id: 3,
      title: "Understanding Node.js: Building the Backbone of Modern Web Applications",
      author: "Aminul Islam",
      date: "March 15, 2024",
      image: "https://i.ibb.co/bd3VQS6/nodejs.png",
      content: "In the ever-evolving world of web development, Node.js and Express.js have emerged as game-changers. They provide the robust framework...",
      link: 'https://medium.com/@aminul157246/understanding-node-js-and-express-js-building-the-backbone-of-modern-web-applications-afa9851f0cc5'
    }
  ];

  return (
    <section id='blog'>
      <div className=" lg:h-screen pb-12 md:pb-0 lg:pb-0 bg-black  text-white px-8 lg:px-24 pt-12 lg:pt-0 md:pt-0 lg:-mt-12 ">
        <h2 className='text-3xl lg:text-5xl text-center font-bold  mb-8'> MY <span className='text-[#29A587] '>BLOG</span> </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="p-6 blog-card bg-black text-white rounded-lg  transition duration-300 transform hover:scale-105">
              <img src={post.image} alt={post.title} className="mb-4 rounded-lg w-[400px] h-[290px]" />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-xs mb-2">By {post.author} - {post.date}</p>
              <p className="text-gray-300">{post.content}</p>
              <a href={post.link}>
                <div className=" mt-4 text-center bg-white text-black duration-300 hover:bg-[#29A587] hover:text-white font-semibold py-2 px-4 rounded">
                  <button>Read More</button>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
