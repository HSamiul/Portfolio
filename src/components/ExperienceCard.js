import { useContext } from 'react'
import ThemeContext from '../contexts'
import '../styles/ExperienceCard.scss'

function ExperienceCard(props) {
    const theme = useContext(ThemeContext)

    return (
        <div className={`experience-card ${theme}`}>
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