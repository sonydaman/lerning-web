import React from 'react'
import PropTypes from 'prop-types'
import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'

const BlogPage = props => {
    return (
        <div className="blog-page">
            <Achievements items={
                [
                    { title: 'Blog 1', img: 'https://unsplash.it/200/200' },
                    { title: 'Blog 2', img: 'https://unsplash.it/200/200?id=1' },
                    { title: 'Blog 3', img: 'https://unsplash.it/200/200?id=2' }

                ]
            } />
        </div>
    )
}

BlogPage.propTypes = {

}

export default BlogPage
