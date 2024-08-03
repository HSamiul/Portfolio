import { useContext } from 'react'
import ThemeContext from '../contexts'
import '../styles/Greeting.scss'

function Greeting() {
    const theme = useContext(ThemeContext)

    return (
        <div className={`greeting ${theme}`}>
            <h1>Hi, I'm Sam.</h1>

            <span>I write beautiful code to create beautiful products.</span>

        </div>
    )
}

export default Greeting