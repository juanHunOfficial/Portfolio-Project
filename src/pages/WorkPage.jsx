import Reveal from '../components/Reveal'
import WorkInfoCard from '../components/WorkInfoCard'
import IntroCard from '../components/IntroCard'

export default function WorkPage() {
  // This is the 'mock' data that is being provided for the components listed below. The format I chose
  // is JSON to mimic the response that would be received from the backend. 
  const workInfoCardData = [
    {
      id: 1,
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
    },
    {
      id: 2,
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
    },
    {
      id: 3,
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
  ]

  return(
    <>
      {/* Introduction card */}
      <IntroCard />

      {/* Title */}
      <Reveal>
        <h1 className='text-6xl mt-[10rem] divider divider-secondary'>Full-Stack Projects</h1>
      </Reveal>
      
      {/* Projects showcase */}
      {/* The code is structured in this way to show that it is scalable to the data set you have provided. 
          the data I have passed is in JSON format to mimic the JSON that would be received from the backend
          if one was to be implemented. */}
      <div className='flex flex-col items-center my-[10rem] justify-center'>
        {workInfoCardData ? workInfoCardData.map((data) => (
          <WorkInfoCard 
            key={data.id}
            title={data.title}
            description={data.description}
            bulletPoints={data.bulletPoints}
            videoSrcLink={data.videoSrcLink}
            githubRepoLink={data.githubRepoLink}
            youtubeLink={data.youtubeLink}
          />
         )) : null }
      </div>
    </>
  )
}