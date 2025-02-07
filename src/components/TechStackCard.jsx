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
  
  const listOfLogos = [
    htmlLogo, 
    cssLogo, 
    jsLogo, 
    pythonLogo, 
    reactLogo,
    tailwindLogo,
    bootstrapLogo, 
    djLogo,
    postgreSQLLogo,
    restapiLogo,
    gitLogo,
    githubLogo,
    postmanLogo 
  ]

  const listOfLogoTitles = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'PYTHON',
    'REACT',
    'TAILWIND',
    'BOOTSTRAP',
    'DJANGO',
    'POSTGRESQL',
    'RESTful API',
    'GIT',
    'GITHUB',
    'POSTMAN'
  ]

  return(
    <Reveal>
      <div className='my-32 flex flex-col justify-center items-center'>
        <div className='flex justify-center mt-32 w-full'>
          <div className='flex flex-wrap w-3/4 gap-16 justify-center'>
            {
              listOfLogos.map((logo, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
              <img className='w-48 h-48' src={logo}/>
              <p className='text-2xl mt-4' >{listOfLogoTitles[index]}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
  )
}