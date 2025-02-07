import Reveal from "./Reveal";
import PropTypes from 'prop-types';


export default function WorkInfoCard({title, description, bulletPoints, videoSrcLink, githubRepoLink, youtubeLink}){
  
  return (
    <div>
      <Reveal>
      <div className="card relative self-center w-[63rem] h-[30rem] mt-[10rem] lg:card-side bg-primary">
        <figure className="w-1/3">
            <iframe
              width="100%"
              height="315"
              src={videoSrcLink}
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </figure>
          <div className="card-body w-2/3">
            <h2 className="card-title"> {title} </h2>
            <h3 className="font-bold italic"> {description} </h3>
            <ul >
              {
                bulletPoints ?
                  bulletPoints.map((bullet, index) => {
                    return <li key={index} className="my-2" >{bullet}</li>
                  }) 
                : <h1>There are none</h1>
              }
            </ul>
            <br/>
            <div className="card-actions absolute justify-end bottom-10 right-10">
              <button className="btn btn-secondary">
                <a
                  href={githubRepoLink}
                  target="_blank"
                  rel="noopener noreferrer"  
                  >
                  Github
                </a>
              </button>
              <button className="btn btn-secondary">
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"  
                  >
                  YouTube
                </a>
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

// PropTypes declaration
WorkInfoCard.propTypes = {
  title : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired,
  bulletPoints : PropTypes.array.isRequired,
  videoSrcLink : PropTypes.string.isRequired,
  githubRepoLink : PropTypes.string.isRequired,
  youtubeLink : PropTypes.string.isRequired,
 }