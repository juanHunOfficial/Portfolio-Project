import juanImg from '../assets/juan-img.jpg'
import reactLogo from '../assets/tech-stack-logos/react-logo.svg'
import djLogo from '../assets/tech-stack-logos/django-logo.svg'
import htmlLogo from '../assets/tech-stack-logos/html-logo.svg'
import cssLogo from '../assets/tech-stack-logos/css-logo.svg'
import postgreSQLLogo from '../assets/tech-stack-logos/postgresql-logo.svg'
import jsLogo from '../assets/tech-stack-logos/javascript-logo.svg'
import pythonLogo from '../assets/tech-stack-logos/python-logo.svg'


export default function AboutPage(){
 
  return(
    <>
      {/* Title section */}
      <div className='mt-32 flex flex-col justify-center items-center'>
        <h1 className='text-6xl '>About</h1>
        <img className='rounded-2xl mt-24 h-96 w-96' src={juanImg} />
      </div>
      {/* Tech stack experience section */}
      <div className='mt-32 flex flex-col justify-center items-center'>
        <h1 className='text-6xl' >The current tools in my tool-belt</h1>
        {/* Tech stack container */}
        <div>
          <h1 className='text-4xl my-32'>Front-End</h1>
          <div className='flex flex-wrap'>
            <img className='w-48 h-48' src={htmlLogo}/>
            <img className='w-48 h-48' src={cssLogo}/>
            <img className='w-48 h-48' src={reactLogo}/>
            <img className='w-48 h-48' src={jsLogo}/>
          </div>
          <h1 className='text-4xl my-32'>Back-End</h1>
          <div className='flex flex-wrap'>
            <img className='w-48 h-48' src={djLogo}/>
            <img className='w-48 h-48' src={postgreSQLLogo}/>
            <img className='w-48 h-48' src={pythonLogo}/>
          </div>
        </div>
      </div>
    </>
  )
}