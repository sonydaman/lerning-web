import React from 'react'
import { Link } from 'react-router-dom'

export const BreadCrumb = (props) => {
    const {pageName} = props;
    const forHome = ()=>{
        return (
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">
                    Home
                </li>
            </ol>
        );
    }
    const forOthers = ()=>{
        return (
            <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName ?? 'Home'}</li>
                </ol>
        )
    }
    return (
        <div>
            <nav aria-label="breadcrumb">
                { pageName === 'Dashboard' ? forHome() : forOthers()}
            </nav>
        </div>
    )
}
