import React from 'react'
// import PropTypes from 'prop-types'
import LikeButton from './LikeButton'
import { FormControl } from 'react-bootstrap'
import ShareButton from './ShareButton'

const CombineButtons = props => {
    return (
        <div>
            <div className="mb-2">
                <LikeButton />              
            </div>
            <div className="mb-2">
              <FormControl type="text" placeholder="Comment...." className="mr-sm-2" />
            </div>

            <div className="mb-2">
                <ShareButton />        
            </div>
        </div>
    )
}

CombineButtons.propTypes = {

}

export default CombineButtons
