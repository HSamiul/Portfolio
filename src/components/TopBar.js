import { useContext } from 'react'
import ThemeContext from '../contexts'
import '../styles/TopBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'

function TopBar() {
    const theme = useContext(ThemeContext)

    return (
        <div className={`top-bar ${theme}`}>
            <a className='icon' href='https://www.linkedin.com/in/samiul-hoque-80793b209/' target='_blank' title='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>

            <a className='icon' href='https://github.com/HSamiul' target='_blank' title='GitHub'>
                <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>

            <a className='text' href={window.location.origin + '/Resume.pdf'} target='_blank'>
                Resume
            </a>
        </div>
    )
}

export default TopBar;