import React from 'react'
// import PropTypes from 'prop-types'
// import { Button, FormControl } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeartbeat, faShareSquare } from '@fortawesome/free-solid-svg-icons'
// import LikeButton from './Components-Button/LikeButton'
// import ShareButton from './Components-Button/ShareButton'
import CombineButtons from './Components-Button/CombineButtons'

const PostComponent = props => {
    const UserFullName = ["Rohit Sharma", "Krishan Kumar", "Manpreet Singh", "Aditya Chouhan"]
    return (
        <div>
            {
    UserFullName.map((name, index) => {
      const result = {
        name,
        index,
        img: `https://unsplash.it/700/400?id=${index}`
      }
      return (

        <div key={result.index} className="container">
          {result.name}

          <div className="posted-img">
            <img src={result.img} alt="" />
          </div>
          <div className="button-section">
            <CombineButtons />
          </div>
        </div>

      )
    }
    )}
        </div>
    )
}

PostComponent.propTypes = {

}

export default PostComponent



