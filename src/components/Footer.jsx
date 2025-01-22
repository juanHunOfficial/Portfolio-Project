import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-primary border-t-2 border-secondary text-base-content p-10">
        <nav className="text-primary-content">
          <h6 className="footer-title">Skills</h6>
          <Link className="link link-hover" to="/Portfolio-Project/about">Tech Stack</Link>
        </nav>
        <nav className="text-primary-content">
          <h6 className="footer-title">Contact</h6>
          <a 
            className="link link-hover"
            href="https://www.linkedin.com/in/juan-hun-608236209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link className="link link-hover" to="/Portfolio-Project/contact">Book a Call</Link>
        </nav>
        <nav className="text-primary-content">
          <h6 className="footer-title">Projects</h6>
          <a 
            className="link link-hover"
            href='https://github.com/juanHunOfficial?tab=repositories'
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <Link className="link link-hover" to="/Portfolio-Project/">Live Projects</Link>
        </nav>
      </footer>
    </>
  );
}