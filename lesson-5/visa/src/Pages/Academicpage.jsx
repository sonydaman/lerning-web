import React from 'react'
import { BreadCrumb } from '../Components'
import { useLayout } from '../hooks/LayoutHook';
// import { Link } from 'react-router-dom'

export const AcademicPage = () => {
    const { state } = useLayout();
    //console.log(state);
    return (

        <div className="academic-page">
            <BreadCrumb />
            <h2>Academic</h2>
            this is a test
            Count : <p>{state?.count}</p>
        </div>

    )
}

