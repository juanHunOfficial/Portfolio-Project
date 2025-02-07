import { InlineWidget } from "react-calendly"
import Reveal from "../components/Reveal"
import EmailForm from "../components/EmailForm"
import ContactPageIntroCard from "../components/ContactPageIntroCard"

export default function ContactPage(){
  return(
    <>
      <div className="min-h-screen items-center content-center justify-center">
        {/* Basic introduction with a link to my linkedin for social media lovers */}
        <ContactPageIntroCard />

        <Reveal>
          <h1 className='text-5xl my-32 divider divider-secondary' >Book a Meeting</h1>
        </Reveal>

        {/* This is the actual widget that is powering calendly, inline styling was used 
        because the component does not work properly with tailwind. */}
        <InlineWidget 
          styles={{
            height: "750px", 
            width: "100%", 
            border: "none", 
            marginBottom: "32px"
          }} 
          url="https://calendly.com/juanhun2424" 
        />
      </div>

      <Reveal>
        <h1 className='text-5xl my-32 divider divider-secondary' >Send me a Message</h1>
      </Reveal>
      
      <EmailForm />
    </>
  )
}