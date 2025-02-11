import React from 'react'

import './SectionHeader.css'
import { Link } from 'react-router-dom'

export default function SectionHeader({ title, desc, btnTitle }) {
    return (
        <div class="courses-header">
            <div class="courses-header__right">
                <span class="courses-header__title title">{title}</span>
                <span class="courses-header__text">{desc}</span>
            </div>
            {
                btnTitle ? (
                    <div class="courses-header__left">
                        <Link to={'/courses/1'} class="courses-header__link">
                            تمامی دوره ها
                            <i class="fas fa-arrow-left courses-header__icon"></i>
                        </Link>
                    </div>
                ) : null
            }
        </div>
    )
}
