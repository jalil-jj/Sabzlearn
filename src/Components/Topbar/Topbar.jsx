import React, { useEffect, useState } from 'react'

import './Topbar.css'
import { Link } from 'react-router-dom'

export default function Topbar() {

    const [allTopbarLinks, setAllTopbarLinks] = useState([])


    useEffect(() => {
        fetch(`http://localhost:4000/v1/menus/topbar`)
            .then(res => res.json())
            .then(data => setAllTopbarLinks(data))
    }, [])


    const getRandomItemsFronArray = (arr, randomCount) => {
        const shuffled = [...arr].sort(() => .5 - Math.random())
        return shuffled.slice(0, randomCount)
    }


    return (
        <div class="top-bar">
            <div class="container-fluid">
                <div class="top-bar__content">
                    <div class="top-bar__right">
                        <ul class="top-bar__menu">
                            {
                                getRandomItemsFronArray(allTopbarLinks, 5).map(item => (
                                    <li class="top-bar__item">
                                        <Link to={item.href} class="top-bar__link">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div class="top-bar__left">
                        <div class="top-bar__email">
                            <a href="#" class="top-bar__email-text top-bar__link">
                                sabzlearn@gmail.com
                            </a>
                            <i class="fas fa-envelope top-bar__email-icon"></i>
                        </div>
                        <div class="top-bar__phone">
                            <a href="#" class="top-bar__phone-text top-bar__link">
                                09921558293
                            </a>
                            <i class="fas fa-phone top-bar__phone-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
