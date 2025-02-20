import Lottie from 'lottie-react'
import animationData from '../assets/animations/dev-with-background-animation.json'
import bubbleAnimationData from '../assets/animations/bubble-animation.json'
import Reveal from '../components/Reveal'
import TechStackCard from '../components/TechStackCard'
import IAmCard from '../components/IAmCard'

export default function AboutPage(){
  // This code is written in a JSON format to mimic the data one would receive from the backend.
  const IAmStatements = [
    {
      id: 1,
      title : 'Attentive to detail',
      description : 
        `I spent 4 years working as a helicopter mechanic as the 
        final certifying signature before an aircraft can be approved 
        as "safe-for-flight". This has trained me to notice the 
        smallest imperfections, this has helped me massively as a 
        full-stack software engineer is catching bugs as they arise 
        and preventing future bugs from making it into the live 
        application. `
    },
    {
      id: 2,
      title : 'A team player',
      description : 
        `I am no stranger to working in a tight-knit group, 
        as a Marine I worked on an 8-person team of diverse
        individuals from all walks of life. Being able to 
        adapt to another person's personality and work style 
        was crucial to our success. This exposure has helped 
        me learn how to effectively work with people to 
        effectively get out tasks done and hit our goals.`
    },
    {
      id: 3,
      title : 'A cross-functional leader',
      description : 
        `I have collaborated between 6 leadership teams to
        strategize mission critical maintenance/troubleshooting 
        priorities in a timely-manner and communicate organizational 
        needs. This experience has helped me see both sides of the 
        coin, making me an effective leader and even more effective worker.
        Making important deadlines without compromising integrity or quality
        is an essential part of my work ethic. `
    },
  ]
  
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
      <TechStackCard />

      {/* I am statements */}

      <Reveal>
        <h1 className='text-6xl divider divider-secondary mt-32 z-10'>I AM</h1>
      </Reveal>
      <Reveal>
        <div className='flex flex-col items-center text-primary-content justify-center py-32'>
        <Lottie className='absolute' animationData={bubbleAnimationData} />
        {/* Similar to the WorkPage, the mapping is used to show that this code was written with scalability
            in mind and the data was written in a JSON format to mimic what the data from the backend would 
            look like. Previous versions of this same code was written in a static format. */}
        {IAmStatements ? IAmStatements.map((data) => (
          <IAmCard 
            key={data.id}
            title={data.title}
            description={data.description}
          />
        )) : null}
        </div>
      </Reveal>
    </>
  )
}