import codeVideo from "../assets/coding-background.mp4"

export default function VideoBackground() {
  return(
    <div className="relative  w-full">
      <video 
        className="w-full h-[55vh] shadow-2xl shadow-black absolute object-cover"
        autoPlay
        loop
        muted
      >
        <source src={codeVideo} type="video/mp4"/>
      </video>
    </div>
  )
}