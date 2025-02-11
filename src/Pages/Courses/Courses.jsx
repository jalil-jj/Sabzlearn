import React, { useEffect, useState } from 'react'
import Topbar from '../../Components/Topbar/Topbar'
import Navbsr from '../../Components/Navbar/Navbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import CourseBox from '../../Components/CourseBox/CourseBox'
import Footer from '../../Components/Footer/Footer'

import './Courses.css'
import Pagination from '../../Components/Pagination/Pagination'

export default function Courses() {

    const [corses, setCourses] = useState([])
    const [showCourses , setShowCourses] = useState([])


    useEffect(() => {
        fetch(`http://localhost:4000/v1/courses`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCourses(data)
            })
    }, [])




    return (
        <>
            <Topbar />
            <Navbsr />

            <Breadcrumb
                links={[
                    { id: 1, title: "خانه", to: '' },
                    { id: 2, title: "آخرین دوره ها", to: 'corses' },
                ]}
            />

            {/* <!--------------------------------  Courses-Section  --------------------------------> */}
            <section class="courses">
                <div class="container">
                    <div class="courses-content">
                        <div class="container">
                            <div class="row">
                                {
                                    showCourses.map(item => (
                                        <CourseBox {...item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                 <Pagination
                 items = {corses} 
                 itemCourse = {4}
                 pathname = {'/courses'}
                 setShowCourses = {setShowCourses}
                 />

                </div>
            </section>
            {/* <!--------------------------------  Courses-Section  --------------------------------> */}

            <Footer />
        </>


    )
}
