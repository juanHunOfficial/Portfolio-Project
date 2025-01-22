import { InlineWidget } from "react-calendly"
import Reveal from "../components/Reveal"
import Lottie from "lottie-react"
import schedulingAnimationData from "../assets/animations/scheduling-animation.json"

export default function ContactPage(){
  return(
    <>
      <div className="min-h-screen items-center content-center justify-center">
        {/* Basic introduction with a link to my linkedin for social media lovers */}
        <Reveal>
          <div className="flex justify-center gap-12 items-center my-24">
            <Lottie className="w-72 h-64" animationData={schedulingAnimationData} />
            <h1 className="text-center w-[550px] text-2xl">
              You can book a call/video meeting at a time that best works for you or feel free 
              to contact me directly via 
              <br/>
              <br/>
              <a
                className="underline hover:bg-secondary hover:glass transition-colors duration-300 rounded-lg p-2" 
                href="https://www.linkedin.com/in/juan-hun-608236209/"
                target="_blank"
                rel="noopener noreferrer"  
              > Linkedin</a>
            </h1>
          </div>
        </Reveal>
        {/* This is the actual widget that is powering calendly, inline styling was used 
        because the component does not work properly with tailwind. */}
        <InlineWidget styles={{height: "750px", width: "100%", border: "none", marginBottom: "32px"}} url="https://calendly.com/juanhun2424" />
      </div>
      <div className="flex justify-center h-[700px] w-full">
        <div className="w-full flex items-center gap-12 flex-col">
          <label className="input input-bordered w-3/4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered w-3/4 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <textarea className="textarea textarea-bordered w-3/4 h-1/2" placeholder="Bio"></textarea>
        </div>
      </div>
    </>
  )
}