import '../styles/App.scss';
import ExperienceCard from './ExperienceCard';
import Greeting from './Greeting';
import SubleasyShowcase from './SubleasyShowcase';
import TopBar from './TopBar';

function App() {
    return (
        <div className='app'>
            <div className="top-bar-section">
                <TopBar />
            </div>

            <div className="greeting-section">
                <Greeting />
            </div>

            <div className='experience-section'>
                <h3>What have I done!?</h3>

                <ExperienceCard 
                    duration='June 2023 - August 2023'
                    company='Paramount'
                    role='Software Engineer Intern'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in convallis orci. Duis lacinia arcu quis molestie consectetur. Nulla semper, lectus ac placerat placerat, mauris urna vulputate dui, quis ultricies tortor ante sed sem. Sed elementum lobortis tincidunt. Curabitur ac pharetra ante. Nam venenatis dignissim sem. Nam pulvinar lobortis commodo. Duis eget mauris et lectus consequat tristique. In lacinia augue at velit rhoncus, id tempor lectus scelerisque. Duis auctor volutpat gravida. Nunc eget lorem bibendum, convallis sem quis, faucibus urna. Duis cursus ultricies dui at lobortis. Sed convallis nunc eget fringilla fringilla. Aenean eget mauris lacinia, luctus mi varius, vehicula risus. Pellentesque convallis purus scelerisque orci lobortis, ac tristique magna molestie.'>
                </ExperienceCard>

                <ExperienceCard 
                    duration='May 2022 - August 2022'
                    company='Erie Insurance'
                    role='Software Engineer Intern'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in convallis orci. Duis lacinia arcu quis molestie consectetur. Nulla semper, lectus ac placerat placerat, mauris urna vulputate dui, quis ultricies tortor ante sed sem. Sed elementum lobortis tincidunt. Curabitur ac pharetra ante. Nam venenatis dignissim sem. Nam pulvinar lobortis commodo. Duis eget mauris et lectus consequat tristique. In lacinia augue at velit rhoncus, id tempor lectus scelerisque. Duis auctor volutpat gravida. Nunc eget lorem bibendum, convallis sem quis, faucibus urna. Duis cursus ultricies dui at lobortis. Sed convallis nunc eget fringilla fringilla. Aenean eget mauris lacinia, luctus mi varius, vehicula risus. Pellentesque convallis purus scelerisque orci lobortis, ac tristique magna molestie.'>
                </ExperienceCard>
            </div>

            <div className='projects-section'>
                <h3>What have I created!?</h3>

                <SubleasyShowcase />
            </div>
        </div>
    );
}

export default App