import useLocalStorage from "use-local-storage";
import ThemeContext from '../contexts'
import '../styles/App.scss';
import ExperienceCard from './ExperienceCard';
import Greeting from './Greeting';
import SubleasyShowcase from './SubleasyShowcase';
import TopBar from './TopBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

function App() {
    const [theme, setTheme] = useLocalStorage('theme', 'dark')

    const toggleTheme = () => {
        if (theme === 'light') { setTheme('dark') }
        else { setTheme('light') }
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`app ${theme}`}>
                <div className='top-bar-section'>
                    <FontAwesomeIcon 
                        className='theme-toggle' 
                        onClick={toggleTheme} 
                        icon={faCircleHalfStroke} 
                        size='lg'
                        title='Toggle theme'
                    />

                    <TopBar />
                </div>

                <div className='greeting-section'>
                    <Greeting />
                </div>

                <div className='experience-section'>
                    <h3>Places I've Worked</h3>

                    <ExperienceCard 
                        duration='June 2023 - August 2023'
                        company='Paramount'
                        role='Software Engineer Intern'
                        description='This was my summer internship for my junior year of college. I was a part of the CBS Sports team and worked on the internal content management system (CMS). I used TypeScript and StencilJS to implement reusable/portable web components that composed the user interface (UI) of the CMS. I also used PHP and Symphony, as the existing UI was built with them. I integrated the new StencilJS components into the existing UI, which started the process of breaking down the legacy monolith into independent and reusable web components. Finally, I implemented automated end-to-end testing of the web components to prove their correctness and reliability. As a result of my work during this internships, I reduced 3000 lines of Symphony code down to 1000 lines of StencilJS code. I also helped eliminate the reliance of an expensive $5000/month 3rd party tool that my code replaced as an in-house solution.'>
                    </ExperienceCard>

                    <ExperienceCard 
                        duration='May 2022 - August 2022'
                        company='Erie Insurance'
                        role='Software Engineer Intern'
                        description='This was my summer internship for my sophomore year of college. I was a part of the Dashboards team and worked on the dashboard used by insurance agents to process claims. I used Mendix to help implement an optimized version of the dashboard that pre-filled forms with cached data. This work involved fetching data from a server and validating it against the current state of insurance claims. I also used TypeScript, Regex, and React to implement a script that parsed and formatted illegable scratch-work done by agents into well-formatted markup code. As a result of my work, I helped optimize dashboard flows used by 13,000 agent. My script also helped parse and format 600,000 entries of dirty data into a parsable format.'>
                    </ExperienceCard>
                </div>

                <div className='projects-section'>
                    <h3>Things I've Made</h3>

                    <SubleasyShowcase />
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App