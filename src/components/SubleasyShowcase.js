import { useContext } from 'react'
import ThemeContext from '../contexts'
import '../styles/SubleasyShowcase.scss'
import AppIcon from '../images/subleasy-app-icon.png'
import Screenshot1 from '../images/subleasy-screenshot-1.png'
import Screenshot2 from '../images/subleasy-screenshot-2.png'
import Screenshot3 from '../images/subleasy-screenshot-3.png'

function SubleasyShowcase() {
    const theme = useContext(ThemeContext)

    return (
        <div className={`subleasy-showcase ${theme}`}>
            <div className='tile-1'>
                <img 
                    src={AppIcon} 
                    alt={'Subleasy\'s app icon'} 
                    title={'Subleasy\'s app icon'}
                />
            </div>

            <div className='tile-2'>
                <h2>Subleasy</h2>

                <p>
                    Subleasy is an iOS app that connects people both seeking and providing sublease opportunities. 
                    It's an all in one package. You can view listings, see useful commute info, create filters to tailor your search, message other users. 
                    Subleasy can help find housing for students starting an internship in a new city, consultants going on a work trip, or families going on vacation.<br/><br/>

                    Subleasy started as a group project during university. 

                    I naively volunteered to write all the code because I was excited to learn Swift and SwiftUI. 
                    It was way more work than I knew I was getting myself into, but I have no regrets. 
                    I fell in love with Swift and it's now my favorite programming language.
                    I became very familar with powerful design patterns like dependency injection and reactive programming.
                    I also became a documentation snob. Every library method in Subleasy is documented down to the errors it can throw.<br/><br/>

                    Subleasy has grown as I have grown as developer - It's my passion project.
                    I'm still developing it to this day and I plan to release to the App Store soon.
                    There's just some quality of life improvements I want to make first (notifications, UX).

                </p>
            </div>
            
            <div className='tile-3'>
                <div className="screenshots">
                    <img 
                        src={Screenshot1} 
                        alt={'A user\'s listing'} 
                        title={'A user\'s listing'} 
                    />

                    <img 
                        src={Screenshot2} 
                        alt={'Two users messaging'}
                        title={'Two users messaging'}
                    />
                    <img 
                        src={Screenshot3} 
                        alt={'A user\'s filters'}
                        title={'A user\'s filters'}
                    />
                </div>
                
            </div>

            <div className='tile-4'>
                <div className='grid-item tech-stack'>
                    <div className='container'>
                        <h5>Tech Stack</h5>

                        <ul>
                            <li>SwiftUI</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>

                <div className='grid-item design-patterns'>
                    <div className='container'>
                        <h5>Design Patterns</h5>

                        <ul>
                            <li>MVVM</li>
                            <li>Dependency Injection</li>
                            <li>Reactive Programming</li>
                        </ul>
                    </div>
                </div>

                <div className='grid-item links'>
                    <div className='container'>
                        <h5>Links</h5>

                        <ul>
                            <li>
                                <a href='https://youtu.be/jHWOUlHT9b0' target='_blank'>
                                    Video (credit: Victoria)
                                </a>
                            </li>
                            <li>
                                <a href={window.location.origin + '/Subleasy Poster.pdf'} target='_blank'>
                                    Poster (credit: Victora)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='grid-item contributors'>
                    <div className='container'>
                        <h5>Contributors</h5>

                        <ul>
                            <li>Annie Eng (Product Manager)</li>
                            <li>Samiul Hoque (Software Engineer)</li>
                            <li>Victoria Zheng (Designer)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubleasyShowcase