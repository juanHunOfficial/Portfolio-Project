import Reveal from '../components/Reveal'
import WorkInfoCard from '../components/WorkInfoCard'
import IntroCard from '../components/IntroCard'

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
      {/* Introduction card */}
      <IntroCard />

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