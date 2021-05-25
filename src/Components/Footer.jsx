import React from 'react'
import styled from 'styled-components'

import { Button } from '../Styles/Button'



export const Footer = () => {
    return (
        <FooterStyled className="footer">
            footer
           <Button>Btn</Button> 
           <Button primary>Btn</Button> 
        </FooterStyled>
    )
}

export const FooterStyled = styled.div`
padding: 0px;
margin: 505px 0px 0px 0px;
background-color: #e7c7c7

`
