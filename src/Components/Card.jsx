import React from 'react'
import { Card as CardUI, Icon } from 'semantic-ui-react'
// import { DefaultCard } from '../images'
const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

const Card = (props) => (
  <CardUI
    image={props.cards.img}
    header={props.cards.header}
    meta={props.cards.meta}
    description={props.cards.description}
    extra={extra}
  />
)

export default Card