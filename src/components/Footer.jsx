import { Link } from "react-router-dom"

export default function Footer() {
  return(
    <>
      <footer className="footer bg-primary border-t-2 border-secondary text-base-content p-10">
        <nav className="text-primary-content">
          <h6 className="footer-title">Skills</h6>
          <Link className="link link-hover">Resume</Link>
          <Link className="link link-hover">Tech Stack</Link>
        </nav>
        <nav className="text-primary-content">
          <h6 className="footer-title">Contact</h6>
          <Link className="link link-hover">LinkedIn</Link>
          <Link className="link link-hover">Book Link Call</Link>
          <Link className="link link-hover">Leave Feedback</Link>
        </nav>
        <nav className="text-primary-content">
          <h6 className="footer-title">Projects</h6>
          <Link className="link link-hover">Github</Link>
          <Link className="link link-hover">Live Projects</Link>
        </nav>
      </footer>
    </>
  )
}