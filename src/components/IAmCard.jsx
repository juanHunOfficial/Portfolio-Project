import Reveal from "./Reveal"
import PropTypes from 'prop-types'

export default function IAmCard({title, description}){
  return (
    <Reveal>
      <div className='card bg-primary glass gap-4 p-[1.2em] w-[850px] mt-16'>
        <h2 className='text-lg text-primary-content card-title self-center '> {title} </h2>
        <p> {description} </p>
        </div>
    </Reveal>
  )
}

IAmCard.propTypes = {
  title : PropTypes.string.isRequired,
  description : PropTypes.string.isRequired
};