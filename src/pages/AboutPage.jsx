import Lottie from 'lottie-react'
import animationData from '../assets/animations/dev-with-background-animation.json'
import bubbleAnimationData from '../assets/animations/bubble-animation.json'
import Reveal from '../components/Reveal'
import TechStackCard from '../components/TechStackCard'

export default function AboutPage(){
  
  return(
    <>
      {/* Title section */}
      <Reveal>
      <div className='flex flex-col min-h-screen  items-center'>
        <Lottie className='w-full h-[650px] mb-24' animationData={animationData} />
        <h1 className='text-6xl '>About Me</h1>
      </div>
      </Reveal>
      {/* Tech stack experience section */}
      <Reveal>
        <h1 className='text-6xl mt-32 divider divider-secondary' >My Skills</h1>
      </Reveal>
      {/* Tech stack container */}
      <TechStackCard />
      {/* I am statements */}
      <Reveal>
      <h1 className='text-6xl divider divider-secondary mt-32 z-10'>I AM</h1>
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