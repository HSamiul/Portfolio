import '../styles/SubleasyShowcase.scss'
import AppIcon from '../images/subleasy-app-icon.png'
import Screenshot1 from '../images/subleasy-screenshot-1.png'
import Screenshot2 from '../images/subleasy-screenshot-2.png'
import Screenshot3 from '../images/subleasy-screenshot-3.png'

function SubleasyShowcase() {
    return (
        <div className='subleasy-showcase'>
            <div className='tile-1'>
                <img src={AppIcon} />
            </div>

            <div className='tile-2'>
                <h2>Subleasy</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in convallis orci. Duis lacinia arcu quis molestie consectetur. Nulla semper, lectus ac placerat placerat, mauris urna vulputate dui, quis ultricies tortor ante sed sem. Sed elementum lobortis tincidunt. Curabitur ac pharetra ante. Nam venenatis dignissim sem. Nam pulvinar lobortis commodo. Duis eget mauris et lectus consequat tristique. In lacinia augue at velit rhoncus, id tempor lectus scelerisque. Duis auctor volutpat gravida. Nunc eget lorem bibendum, convallis sem quis, faucibus urna. Duis cursus ultricies dui at lobortis. Sed convallis nunc eget fringilla fringilla. Aenean eget mauris lacinia, luctus mi varius, vehicula risus. Pellentesque convallis purus scelerisque orci lobortis, ac tristique magna molestie.
                </p>
            </div>
            
            <div className='tile-3'>
                <img src={Screenshot1} />
                <img src={Screenshot2} />
                <img src={Screenshot3} />
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
                            <li><a>Video</a></li>
                            <li><a>Poster</a></li>
                        </ul>
                    </div>
                </div>


                <div className='grid-item contributors'>
                    <div className='container'>
                        <h5>Contributors</h5>

                        <ul>
                            <li>Annie Eng (Project Management)</li>
                            <li>Samiul Hoque (Software Engineering)</li>
                            <li>Victoria Zheng (Design)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubleasyShowcase