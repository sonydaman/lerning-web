import React from 'react'

import { Button } from '../Styles/Button'
import { FooterStyled } from '../Styles/Footer'



export const Footer = () => {
    return (
        <FooterStyled className="footer">
            footer
           <Button>Btn</Button> 
           <Button primary>Btn</Button> 
        </FooterStyled>
    )
}


