import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/gallery">Gallery</Link>
                    </li>
                </ul>
        </nav>
        </div>
    )
}
