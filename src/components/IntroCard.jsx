import Reveal from "./Reveal"
import Lottie from "lottie-react"
import welcomeGuyAnimationData from '../assets/animations/welcome-guy-animation.json'
import speechBubble from '../assets/speech-bubble.svg'
import { Link } from "react-router-dom"
 
export default function IntroCard() {
  return(

    <Reveal>
      <div className='flex flex-col items-center justify-center'>
        <div className="card card-side relative z-10 glass bg-primary text-primary-content mt-48 w-[63rem]">
          <Lottie animationData={welcomeGuyAnimationData} />
          <div className='absolute w-32 top-[2.5rem] left-[12rem]'>
            <img  src={speechBubble} />
          </div>
            <p className="absolute w-20 top-[5rem] left-[13.5rem] text-center card-title">Hi, I&apos;m Juan</p>
          <div className="card-body">
            <h2 className="card-title">I am a Military Veteran turned Full-Stack Software Engineer</h2>
            <p className='w-[35rem] '>
              with over 5 years of operations, logistics and project management experience in 
              the military across maintenance and operations. Tested expertise in quality assurance, 
              technical leadership and customer relations. Seeking a developer position in a 
              challenging field that has opportunities for growth and development.
            </p>
            <p className="font-bold">Secret Clearance </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary text-secondary-content" to="/Portfolio-Project/contact" >Let&apos;s Work Together!</Link>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}