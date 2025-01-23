import React, { useEffect, useState } from 'react'

export default function LandingCounter({ count }) {


    const [courseContainer, setCourseContainer] = useState(0)

    useEffect(() => {

        let interval = setInterval(() => {
            setCourseContainer(prev => prev + 1)
        }, 1 )

        if (courseContainer === count) {
            clearInterval(interval)
        }


        return () => clearInterval(interval)

    }, [courseContainer])


    return <span class="landing-status__count">{courseContainer}</span>
    
}
