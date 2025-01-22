import { InlineWidget } from "react-calendly"
import Reveal from "../components/Reveal"
import Lottie from "lottie-react"
import schedulingAnimationData from "../assets/animations/scheduling-animation.json"
import EmailForm from "../components/EmailForm"

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
      <Reveal >
        <EmailForm />
      </Reveal>
    </>
  )
}