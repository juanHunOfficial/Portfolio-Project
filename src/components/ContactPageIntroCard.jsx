import Reveal from "./Reveal"
import Lottie from "lottie-react"
import schedulingAnimationData from "../assets/animations/scheduling-animation.json"

export default function ContactPageIntroCard() {
  return (
    <Reveal>
      <div className="flex justify-center gap-12 items-center my-24">
        <Lottie className="w-72 h-64" animationData={schedulingAnimationData} />
        <div className="flex flex-col items-center gap-6 ">
          <h1 className="text-center w-[550px] text-2xl">
            You can book a call/video meeting, send a message, or contact me on LinkedIn.
          </h1>
          <a
            className="btn btn-secondary text-secondary-content transition-colors duration-300 text-2xl rounded-lg" 
            href="https://www.linkedin.com/in/juan-hun-608236209/"
            target="_blank"
            rel="noopener noreferrer"  
          >LinkedIn</a>
        </div>
      </div>
    </Reveal>
  )
}