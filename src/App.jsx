import { Route, Routes } from "react-router"
import {  AboutView, PortafolioView, BlogView, HomeView} from "./view";
import { Link, useNavigate } from 'react-router-dom';
import './assets/css/navbar.css'


export const App = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate('/');
  }
  return (
    <div className="max-w-7xl mx-auto flex flex-col relative">
      <nav className="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <button onClick={redirectToHome} className="flex">
            <span className="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
            <img className="w-9 rounded-full" src="../src/assets/Img/portadas.png" alt="github" />
              SergioRamirez06
            </span>
          </button>
          <div className="flex md:order-2 fadein-bot">
            <a href="https://github.com/SergioRamirez06">
              <img className="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github" />
            </a>
          </div>
          <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/" className="fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portafolio" className="fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="md:mt-[100px]">
        {/* Aquí es donde se renderizarán los componentes de las rutas */}
        <Routes>
          <Route path="/" element={ <HomeView />}/>
          <Route path="/about" element={ <AboutView />}/>
          <Route path="/portafolio" element={ <PortafolioView />}/>
          <Route path="/blog" element={ <BlogView />}/>
        </Routes>
      </div>

      <footer className="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
        <nav className="flex justify-around py-4 text-xs">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/portafolio" className="text-gray-300 hover:text-white">Portfolio</Link>
          <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
          <Link to="/home" className="text-gray-300 hover:text-white">sr</Link>
        </nav>
      </footer>
    </div>
    
  )
}
