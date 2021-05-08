import React, { useState } from 'react'
import { Img } from '../Components';
import Achievement from '../Components/Achievement';
import LoginComponent from '../Components/LoginComponent';
import Title from '../Components/Title';
export const ContactUsPage = () => {
    // var //let , const
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const result = { name: 'Nidhi', class: 'BTech', subject: 'Computer' };
    const [resData, setResData] = useState(result)
    //ecma-6
    const updateRes = () => {
        // console.log('hi')
        // result.name="Manvinder";
        // result.class="BCA";
        // result.class="Computers";
        setResData({ name: 'Manwinder', class: 'BCA', subject: 'Computers' });
        // console.log('hi')
    }

    // useEffect(() => {
    //     console.log("Mounting")
    // }, []);
    // useEffect(() => {
    //     console.log("resData",resData)
    // }, [resData]);
    // useEffect(() => {
    //     return()=>{
    //         console.log("UnMounting")
    //         // alert("Are you sure want to leave this page?")
    //         setResData(result);
    //     }
    // }, []);
    // console.log(resData);
    return (
        <div>
            <LoginComponent title="Contact Us" btnText="Submit" inputText="Mobile" inputT="Name" />
            <input type="text" defaultValue={result.name} />
            <div className="userName">{resData.name}</div>
            <div className="userClass">{resData.class}</div>
            <div className="userSubject">{resData.subject}</div>
            <button onClick={updateRes}> Update Data</button> 
            <Achievement item={{title:'HI',img:'https://unsplash.it/200/200'}} />
             <Title titleName="Manvinder" />
            <Img source='https://unsplash.it/200/200?id=12' />
        </div>

    )
}
