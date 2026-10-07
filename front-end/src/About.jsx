import { useState, useEffect } from 'react'
import axios from 'axios'


const About = props => {
    const [about, setAbout] = useState(null)
    

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about`)
            .then(res => {
                setAbout(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!about) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>About Me</h1>
            {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <img src={about.imageUrl} alt="Profile" width="300" height="300" />
        </div>
    )
    

}

export default About