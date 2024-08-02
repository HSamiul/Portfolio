import '../styles/TopBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'

function TopBar() {
    return (
        <div className='top-bar'>
            <a className='icon' href='https://www.linkedin.com/in/samiul-hoque-80793b209/' target='_blank' title='LinkedIn'>
                <FontAwesomeIcon icon={faLinkedin} size='xl' />
            </a>

            <a className='icon' href='https://github.com/HSamiul' target='_blank' title='GitHub'>
                <FontAwesomeIcon icon={faGithub} size='xl' />
            </a>

            {/* <a className='icon' href={window.location.origin + '/Samiul-Hoque-Resume.pdf'} target='_blank' title='Email'>
                <FontAwesomeIcon icon={faEnvelope} size='lg' />
            </a> */}

            <a className='text' href={window.location.origin + '/Samiul-Hoque-Resume.pdf'} target='_blank'>
                Resume
            </a>
        </div>
    )
}

export default TopBar;