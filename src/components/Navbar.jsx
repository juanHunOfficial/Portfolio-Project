import { Link } from "react-router-dom"
import githubLogo from '../assets/github-logo.png'
import codePlatoonLogo from '../assets/code-platoon-logo-mini.png'

export default function Navbar() {
  return(
    <>
      <div className="navbar bg-primary">
        {/* Github link and icon */}
        <div className="navbar-start">
            <a 
              className="flex flex-row gap-2 items-center btn bg-primary text-lg hover:bg-transparent border-none"
              href='https://github.com/juanHunOfficial?tab=repositories'
              target="_blank"
              rel="noopener noreferrer"
            >
              My Github 
              <img src={githubLogo} className="h-10 w-10" alt="Github Logo"/>
            </a>
        </div>
        {/* Middle section of the navbar */}
        <div className="navbar-center hidden gap-2 lg:flex">
          <button className="btn btn-ghost hover:bg-transparent text-lg"><Link>Full-stack Projects</Link></button>
          <button className="btn btn-ghost hover:bg-transparent text-lg"><Link>About</Link></button>
          <button className="btn btn-ghost hover:bg-transparent text-lg"><Link>Resume</Link></button>
          <button className="btn btn-ghost hover:bg-transparent text-lg"><Link>Contact Me</Link></button>
        </div>
        <div className="navbar-end mr-4">
          <a 
            className="btn btn-ghost h-12 w-12 btn-circle hover:bg-transparent"
          >
            <img className="h-12 w-14 btn-circle" src={codePlatoonLogo} />
          </a>
        </div>
      </div>
    </>
  )
}