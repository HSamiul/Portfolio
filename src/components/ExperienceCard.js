import '../styles/ExperienceCard.scss'

function ExperienceCard(props) {
    return (
        <div className='experience-card'>
            <span className='duration'>
                {props.duration}
            </span>

            <h4 className='company'>
                {props.company}
            </h4>

            <span className='role'>
                {props.role}
            </span>

            <p className='description'>
                {props.description}
            </p>
        </div>
    )
}

export default ExperienceCard