import Lottie from 'lottie-react'
import animationData from '../assets/animations/dev-with-background-animation.json'
import bubbleAnimationData from '../assets/animations/bubble-animation.json'
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
import Reveal from '../components/Reveal'

export default function AboutPage(){
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
    <>
      {/* Title section */}
      <Reveal>
      <div className='pt-16 flex flex-col min-h-screen justify-center items-center'>
        <Lottie className='mt-12 w-full h-[650px]' animationData={animationData} />
        <h1 className='text-6xl mb-24 '>About Me</h1>
      </div>
      </Reveal>
      {/* Tech stack experience section */}
      <Reveal>
        <h1 className='text-6xl mt-32 divider divider-secondary' >My Skills</h1>
      </Reveal>
      <Reveal>
      <div className='my-32 flex flex-col justify-center items-center'>
        {/* Tech stack container */}
        <div className='flex justify-center mt-32 w-full'>
          <div className='flex flex-wrap w-3/4 gap-16 justify-center'>
            {listOfLogos.map((logo, index) => (
              
              <div key={index} className='flex flex-col items-center justify-center'>
              <img className='w-48 h-48' src={logo}/>
              <p className='text-2xl mt-4' >{listOfLogoTitles[index]}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
      </Reveal>
      {/* I am statements */}
      <Reveal>
      <h1 className='text-6xl divider divider-secondary my-32 z-10'>I AM</h1>
      </Reveal>
      <Reveal>
      <div className='flex flex-col items-center text-primary-content justify-center py-32'>
      <Lottie className='absolute' animationData={bubbleAnimationData} />
        <div className='card bg-primary glass p-4 w-[850px] mt-16'>
          <h2 className='text-lg text-primary-content card-title self-center'>Attentive to detail</h2>
          <br/>
          <p>
            I spent 4 years working as a helicopter mechanic as the 
            final certifying signature before an aircraft can be approved 
            as "safe-for-flight". This has trained me to notice the 
            smallest imperfections, this has helped me massively as a 
            full-stack software engineer is catching bugs as they arise 
            and preventing future bugs from making it into the live 
            application.  
          </p>
        </div>
        <div className='card bg-primary glass p-4 w-[850px] mt-10'>
          <h2 className='text-lg text-primary-content card-title self-center'>A team player</h2>
          <br/>
          <p>
            I am no stranger to working in a tight-knit group, 
            as a Marine I worked on an 8-person team of diverse
            individuals from all walks of life. Being able to 
            adapt to another person's personality and work style 
            was crucial to our success. This exposure has helped 
            me learn how to effectively work with people to 
            effectively get out tasks done and hit our goals.
          </p>
        </div>
        <div className='card bg-primary glass p-4 w-[850px] mt-10'>
          <h2 className='text-lg text-primary-content card-title self-center'>A cross-functional leader</h2>
          <br/>
          <p>
            I have collaborated between 6 leadership teams to
            strategize mission critical maintenance/troubleshooting 
            priorities in a timely-manner and communicate organizational 
            needs. This experience has helped me see both sides of the 
            coin, making me an effective leader and even more effective worker.
            Making important deadlines without compromising integrity or quality
            is an essential part of my work ethic. 
          </p>
        </div>
      </div>
      </Reveal>
    </>
  )
}