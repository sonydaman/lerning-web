import React, { useState } from 'react'
export const ContactPage = () => {
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

            <input type="text" defaultValue={result.name} />
            <div className="userName">{resData.name}</div>
            <div className="userClass">{resData.class}</div>
            <div className="userSubject">{resData.subject}</div>
            <button onClick={updateRes}> Update Data</button>
        </div>

    )
}
