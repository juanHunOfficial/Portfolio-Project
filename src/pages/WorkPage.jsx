import Lottie from 'lottie-react'
import welcomeGuyAnimationData from '../assets/animations/welcome-guy-animation.json'
import speechBubble from '../assets/speech-bubble.svg'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'
import WorkInfoCard from '../components/WorkInfoCard'

export default function WorkPage() {
  
  const project1Info = {
    title : 'Redzone Getaway (Group Project)',
    description : "This is a travel booking site made for NFL sans who want to keep up with their teams latest scores and follow them around the country, never missing a single live game!",
    bulletPoints : [
      "Users can create, update, and delete events, flights, and hotel bookings.",
      "Users can look up flights and hotels by location code.",
      "Users can add items to their cart so they can continue browsing and proceed to checkout when they are ready.",
      "Built on React.js and Django , utilizing the Ball Don't Lie API for NFL player stats, Sports Data API for NFL game scores, Flight API for real-time flight data, and the Amadeus API for real-time hotel data."
    ],
    videoSrcLink : "https://www.youtube.com/embed/woOCsWDlof0",
    githubRepoLink : "https://github.com/juanHunOfficial/redzone-getaway-clone",
    youtubeLink : "https://youtu.be/woOCsWDlof0",
  }

  const project2Info = {
    title : 'Progressive Overload Tracker (First Solo Project)',
    description : "This is a web application for bodybuilders that want to track their progress effectively",
    bulletPoints : [
      "Users can create, update, and delete trackers, workouts, exercises, and data points showcasing their progress.",
      "Users can look up exercises by body part to get inspiration for their workouts.",
      "Users can look up meals to get insight into the meal’s macro-nutrients to help them meet their nutrition goals.",
      "Built on React.js and Django , utilizes Ninja-API’s Nutrition API and Exercise API for nutrition and exercise data."
    ],
    videoSrcLink : "https://www.youtube.com/embed/aSZmQHxTa5w",
    githubRepoLink : "https://github.com/juanHunOfficial/code-platoon-folder/tree/main/fitness_proj",
    youtubeLink : "https://youtu.be/aSZmQHxTa5w",
  }

  const project3Info = {
    title : 'Coming Soon, the button below takes you to the repository of my latest project',
    description : "This is a web application for bodybuilders that want to track their progress effectively",
    bulletPoints : [
      `Currently I am learning how to use Node.js, Express, and MongoDB by making a finance app. The goal of the app 
        is to help my wife and I keep better track of our money with an app that can link to our bank account and pull 
        all of our recent transactions. This will allow us to categorize our spending in the appropriate categories and 
        keep track of the our spending habits. The categories and their subsequent data will be saved to the account and 
        displayed in a graph utilizing charts.js to make an easy to understand visual representation of our spending habits.`
    ],
    videoSrcLink : "",
    githubRepoLink : "https://github.com/juanHunOfficial/finance-app",
    youtubeLink : "",
  }

  return(
    <>
      <div className='flex flex-col items-center justify-center'>
      {/* Introduction card */}
        <Reveal>
        <div className="card card-side relative z-10 glass bg-primary text-primary-content mt-48 w-[63rem]">
          <Lottie animationData={welcomeGuyAnimationData} />
          <div className='absolute w-32 top-[2.5rem] left-[12rem]'>
            <img  src={speechBubble} />
          </div>
            <p className='absolute w-20 top-[5rem] left-[13.5rem] text-center card-title'>Hi, I'm Juan</p>
          <div className="card-body">
            <h2 className="card-title">I am a Military Veteran turned Full-Stack Software Engineer</h2>
            <p className='w-[35rem] '>
              with over 5 years of operations, logistics and project management experience in 
              the military across maintenance and operations. Tested expertise in quality assurance, 
              technical leadership and customer relations. Seeking a developer position in a 
              challenging field that has opportunities for growth and development.
              <br/>
              <br/>
              <strong>Secret Clearance </strong>
            </p>
            <div className="card-actions justify-end">
              <Link className="btn btn-secondary text-secondary-content" to="/Portfolio-Project/contact" >Let's Work Together!</Link>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
      {/* Title */}
      <Reveal>
        <h1 className='text-6xl mt-[10rem] divider divider-secondary'>Full-Stack Projects</h1>
      </Reveal>
      {/* Projects showcase */}
        <div className='flex flex-col items-center my-[10rem] justify-center'>
        {/* Project 1 */}
          <WorkInfoCard 
            title={project1Info.title} 
            description={project1Info.description}
            bulletPoints={project1Info.bulletPoints} 
            videoSrcLink={project1Info.videoSrcLink} 
            githubRepoLink={project1Info.githubRepoLink} 
            youtubeLink={project1Info.youtubeLink} 
          />
          {/* Project 2 */}
          <WorkInfoCard 
            title={project2Info.title} 
            description={project2Info.description}
            bulletPoints={project2Info.bulletPoints} 
            videoSrcLink={project2Info.videoSrcLink} 
            githubRepoLink={project2Info.githubRepoLink} 
            youtubeLink={project2Info.youtubeLink} 
          />
          {/* Project 3 */}
          <WorkInfoCard 
            title={project3Info.title} 
            description={project3Info.description}
            bulletPoints={project3Info.bulletPoints} 
            videoSrcLink={project3Info.videoSrcLink} 
            githubRepoLink={project3Info.githubRepoLink} 
            youtubeLink={project3Info.youtubeLink} 
          />
      </div>
    </>
  )
}