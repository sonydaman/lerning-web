import React from 'react'
// import { Col, Row } from 'react-bootstrap'
export const AchievementsPage = () => {
    const titles = ["Title-1", "Title-2", "Title-3", "Title-4", "Title-5", "Title-6","Title-7","Title-8","Title-9","Title-10"];
    // images.map(()=>{

    // });
    //ecma-6
    //ecma-5
     // img:'https://unsplash.it/200/200?id='+index
    // const titleData = titles.map((title,index)=>({
    //         title,
    //         index,
    //         img:`https://unsplash.it/200/200?id=${index}`
    //     }))
    // const titleFilterData = titles.filter((title,index)=>( index<5 && title))
    // console.log(titleData);
    // console.log(titleFilterData);
    return (
        <div>
          <h2>Achievements</h2> 
        {
            titles.map((title,index)=>{
                const result = { title,
                                index,
                                img:`https://unsplash.it/200/200?id=${index}`
                            }
                return (
                    <div key={result.index} className="title-container">
                        <div className="title">
                            {result.title}
                        </div>
                        <div className="title-img">
                            <img src={result.img} alt=""/>
                        </div>
                    </div>
                )
        })
        }
        </div>

    )
}