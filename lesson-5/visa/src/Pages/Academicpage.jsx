import React from 'react'
import Achievements from '../Components/Achievements'
import { BreadCrumb } from '../Components/BreadCrumb'

export const AcademicPage = () => {
    return (
        <div className="academic-page">
            <BreadCrumb pageName="Academic" />
            this is a test
            <Achievements  items={[{title:'AcademicPage',index:0,img:`https://unsplash.it/200/200?id=0`}]} />
        </div>

    )
}

