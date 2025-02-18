import Reveal from "./Reveal"
import htmlLogo from '../assets/tech-stack-logos/html-logo.svg'
import cssLogo from '../assets/tech-stack-logos/css-logo.svg'
import jsLogo from '../assets/tech-stack-logos/javascript-logo.svg'
import pythonLogo from '../assets/tech-stack-logos/python-logo.svg'
import reactLogo from '../assets/tech-stack-logos/react-logo.svg'
import tailwindLogo from '../assets/tech-stack-logos/tailwind-logo.svg'
import bootstrapLogo from '../assets/tech-stack-logos/bootstrap-logo.svg'
import djLogo from '../assets/tech-stack-logos/django-logo.svg'
import postgreSQLLogo from '../assets/tech-stack-logos/postgresql-logo.svg'
import restapiLogo from '../assets/tech-stack-logos/rest-api-logo.svg'
import gitLogo from '../assets/tech-stack-logos/git-logo.svg'
import githubLogo from '../assets/github-logo.png'
import postmanLogo from '../assets/tech-stack-logos/postman-logo.svg'

export default function TechStackCard() {
  
  const techStackLogos = [
    {
      id: 1,
      logo: htmlLogo,
      logoTitle: 'HTML'
    },
    {
      id: 2,
      logo: cssLogo,
      logoTitle: 'CSS'
    },
    {
      id: 3,
      logo: jsLogo,
      logoTitle: 'JAVASCRIPT'
    },
    {
      id: 4,
      logo: pythonLogo,
      logoTitle: 'PYTHON'
    },
    {
      id: 5,
      logo: reactLogo,
      logoTitle: 'REACT'
    },
    {
      id: 6,
      logo: tailwindLogo,
      logoTitle: 'TAILWIND'
    },
    {
      id: 7,
      logo: bootstrapLogo,
      logoTitle: 'BOOTSTRAP'
    },
    {
      id: 8,
      logo: djLogo,
      logoTitle: 'DJANGO'
    },
    {
      id: 9,
      logo: postgreSQLLogo,
      logoTitle: 'POSTGRESQL'
    },
    {
      id: 10,
      logo: restapiLogo,
      logoTitle: 'RESTful API'
    },
    {
      id: 11,
      logo: gitLogo,
      logoTitle: 'GIT'
    },
    {
      id: 12,
      logo: githubLogo,
      logoTitle: 'GITHUB'
    },
    {
      id: 13,
      logo: postmanLogo,
      logoTitle: 'POSTMAN'
    }
  ];
  
  return(
    <Reveal>
      <div className='my-32 flex flex-col justify-center items-center'>
        <div className='flex justify-center mt-32 w-full'>
          <div className='flex flex-wrap w-3/4 gap-16 justify-center'>
            {
              techStackLogos.map((data) => (
              <div key={data.id} className='flex flex-col items-center justify-center'>
              <img className='w-48 h-48' src={data.logo}/>
              <p className='text-2xl mt-4' >{data.logoTitle}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
  )
}