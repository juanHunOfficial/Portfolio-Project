import Lottie from 'lottie-react'
import welcomeGuyAnimationData from '../assets/animations/welcome-guy-animation.json'
import speechBubble from '../assets/speech-bubble.svg'

export default function WorkPage() {
  
  return(
    <div id="work-page-container" className="flex flex-col items-center justify-center">
      {/* Introduction card */}
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
            <button className="btn btn-secondary text-secondary-content">Let's Work Together!</button>
          </div>
        </div>
      </div>
      {/* Title */}
      <h2  className='text-6xl divider divider-secondary mt-64' >Full-Stack Projects</h2>
      {/* Projects showcase */}
        {/* Project 1 */}
      <div className="card mt-32 lg:card-side bg-primary">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        {/* Project 2 */}
      <div className="card lg:card-side mt-32 bg-primary">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
        {/* Project 3 */}
      <div className="card lg:card-side my-32 bg-primary">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  )
}