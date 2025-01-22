import Lottie from 'lottie-react'
import welcomeGuyAnimationData from '../assets/animations/welcome-guy-animation.json'
import speechBubble from '../assets/speech-bubble.svg'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

export default function WorkPage() {
  
  return(
    <>
      <div className='flex flex-col items-center justify-center'>
      {/* Introduction card */}
        <Reveal>
        <div className="card card-side relative z-10 glass bg-primary text-primary-content mt-48 w-[1000px]">
          <Lottie animationData={welcomeGuyAnimationData} />
          <div className='absolute w-32 top-10 left-48'>
            <img  src={speechBubble} />
          </div>
            <p className='absolute w-20 top-20 left-[214px] text-center card-title'>Hi, I'm Juan</p>
          <div className="card-body">
            <h2 className="card-title">I am a Military Veteran turned Full-Stack Software Engineer</h2>
            <p className='w-[550px] '>
              with over 5 years of operations, logistics and project management experience in 
              the military across maintenance and operations. Tested expertise in quality assurance, 
              technical leadership and customer relations. Seeking a developer position in a 
              challenging field that has opportunities for growth and development.
              <br/>
              <br/>
              <strong>Secret Clearance </strong>
            </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary text-secondary-content"to="/Portfolio-Project/contact" >Let's Work Together!</Link>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
      {/* Title */}
      <Reveal>
        <h1 className='text-6xl mt-32 divider divider-secondary'>Full-Stack Projects</h1>
      </Reveal>
      {/* Projects showcase */}
      <div className='flex flex-col items-center justify-center'>
        {/* Project 1 */}
        <Reveal>
        <div className="card mt-32 lg:card-side bg-primary">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Coming Soon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Coming Soon, visit my github to see my latest projects</h2>
            <p>Click the button below to be taken to my latest project's repository.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <a
                  href='https://github.com/juanHunOfficial/code-platoon-folder/tree/main/fitness_proj'
                  target="_blank"
                  rel="noopener noreferrer"  
                  >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        </Reveal>
          {/* Project 2 */}
        <Reveal>
        <div className="card lg:card-side mt-32 bg-primary">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Coming Soon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Coming Soon, visit my github to see my latest projects</h2>
            <p>Click the button to Github on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <a
                  href='https://github.com/juanHunOfficial/code-platoon-folder/tree/main/fitness_proj'
                  target="_blank"
                  rel="noopener noreferrer"  
                  >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        </Reveal>
          {/* Project 3 */}
        <Reveal>
        <div className="card lg:card-side my-32 bg-primary">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Coming Soon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Coming Soon, visit my github to see my latest projects</h2>
            <p>Click the button to Github on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">
                <a
                  href='https://github.com/juanHunOfficial/code-platoon-folder/tree/main/fitness_proj'
                  target="_blank"
                  rel="noopener noreferrer"  
                  >
                  Github
                </a>
              </button>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </>
  )
}