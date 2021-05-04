import React from 'react'
import Achievements from '../Components/Achievements';
//import { BreadCrumb } from '../components';
// import { Col, Row } from 'react-bootstrap'
export const AchievementsPage = () => {
    const titles = ["Title-1", "Title-2", "Title-3", "Title-4", "Title-5", "Title-6", "Title-7", "Title-8", "Title-9", "Title-10"];
    // const titleData = ()=> ((titles.map((title,index)=>({ title,
    //                                 index,
    //                                 img:`https://unsplash.it/200/200?id=${index}`
    //                             }))))
    const titleData = ()=> {
        const myObject = titles.map((title,index)=>{
            // console.log(title,index)
            const res = {
                title,
                index,
                img:`https://unsplash.it/200/200?id=${index}`
            }
            // console.log(res)
            return res;
        })
        return myObject;
        // return [{title:'Title-1',index:0,img:`https://unsplash.it/200/200?id=0`}];
    }
    return (
        <div>
          <h2>Achievements</h2>
          <Achievements  items={titleData()} />
        </div>
    )
}