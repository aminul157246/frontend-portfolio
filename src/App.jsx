import { Toaster } from "react-hot-toast"
import About from "./pages/About/About"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import Education from "./pages/Education/Education"
import MyProject from "./pages/MyProject/MyProject"
import Skills from "./pages/Skills/Skills"
import Footer from "./shared/Footer/Footer"
import Navbar from "./shared/Navbar/Navbar"
import Hero from "./pages/Hero/Hero"



function App() {


  let sections = document.querySelectorAll('section')
  let navLinks = document.querySelectorAll('nav ul a')

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = Window.scrolly;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id')

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active')
          document.querySelector('nav ul a [href*=' + id + ']').classList.add('active')
        })
      }
    })
  }
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Education />
      <Skills />
      <MyProject />
      <Blog />
      <Contact />
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
    </div>
  )
}

export default App
