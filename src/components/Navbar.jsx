import { Link } from "react-router-dom"
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin.svg'

export default function Navbar() {
  return(
    <>
      <div className="navbar fixed text-primary-content z-50 bg-primary">
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
          <Link className="btn btn-ghost hover:bg-transparent text-lg" to="/">Projects</Link>
          <Link className="btn btn-ghost hover:bg-transparent text-lg" to="/about/" >About</Link>
          <Link className="btn btn-ghost hover:bg-transparent text-lg">Resume</Link>
          <Link className="btn btn-ghost hover:bg-transparent text-lg">Contact</Link>
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
      </div>
    </>
  )
}