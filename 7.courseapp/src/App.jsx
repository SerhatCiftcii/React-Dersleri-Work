import { useState } from 'react'

import './App.css'
import Header from './Header'
import { courses } from './Data'
import Course from './Course'
import './css/course.css'

function App() {


  return (
    <div >
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course course={course} key={course.id} />
          ))
        }
      </div>
    </div>
  )
}

export default App
