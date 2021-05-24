import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/categories">Categories</Link>
                    </li>
                    <li>
                    <Link to="/products">Products</Link>
                    </li>
                    <li>
                    <Link to="/new-products">New Products</Link>
                    </li>
                </ul>
        </nav>
        </div>
    )
}
