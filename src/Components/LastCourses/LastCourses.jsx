import React, { useEffect, useState } from 'react'

import './LastCourses.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'

export default function LastCourses() {

  const [courses, setCourses] = useState([])

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
      <div class="courses">
        <div class="container">
          <SectionHeader
            title="جدیدترین دوره ها"
            desc="سکوی پرتاپ شما به سمت موفقیت"
            btnTitle="تمامی دوره ها"
          />

          <div class="courses-content">
            <div class="container">
              <div class="row">
                {
                  courses.slice(0 , 6).map(item => (
                    <CourseBox {...item}/>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
