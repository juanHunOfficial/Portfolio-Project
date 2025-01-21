import { NavLink, useLocation } from "react-router-dom"
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin.svg'
import resume from "../assets/resume-docs/juan-resume.pdf"

export default function Navbar() {
  const location = useLocation();

  // helper function that checks if the what the current locations 
  // path is and returns the corresponding value
  const isActive = (path) => location.pathname === path ? "bg-neutral text-neutral-content hover:bg-neutral transitions duration-700 " : "";
  
  return(
    <>
      <div className="navbar sticky text-primary-content top-0 z-50 shadow-xl bg-primary">
        {/* Github link and icon */}
        <div className="navbar-start">
            <a 
              className="flex flex-row gap-2 items-center btn bg-primary shadow-none text-lg hover:bg-transparent border-none"
              href='https://github.com/juanHunOfficial?tab=repositories'
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} className="h-10 w-10" alt="Github Logo"/>
            </a>
        </div>
        {/* Middle section of the navbar */}
        <div className="navbar-center hidden gap-2 lg:flex">
          <NavLink 
             className={`btn btn-ghost hover:bg-transparent text-lg ${isActive('/')}`}
             to="/"
          >
            Projects
          </NavLink >
          <NavLink 
            className={`btn btn-ghost hover:bg-transparent text-lg ${isActive('/about/')}`}
            to="/about/" 
          >
            About
          </NavLink>
          <NavLink 
            className={`btn btn-ghost hover:bg-transparent text-lg ${isActive('/contact/')}`} 
            to="/contact/"
          >
            Contact
          </NavLink>
        </div>
        <div className="navbar-end mr-4">
          <a 
            className="btn btn-ghost h-12 w-12 btn-circle hover:bg-transparent"
            href="https://www.linkedin.com/in/juan-hun-608236209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-12 w-12" src={linkedinLogo} />
          </a>
        </div>
        <button 
          className="btn absolute btn-outline right-24"
          onClick={()=> document.getElementById("resume-preview-modal").showModal()}
        >
          Resume Preview
        </button>
        <dialog id="resume-preview-modal" className="modal">
          <div className="modal-box">
            <iframe src={resume} width="100%" height="650px" className="border-0 mb-4"></iframe>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  )
}