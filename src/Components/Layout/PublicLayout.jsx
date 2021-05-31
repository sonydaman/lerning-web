import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
import "../../Css/PublicLayout.css"
export const PublicLayout = (props) => {
    return (
        <div>
           <Header />
            <Grid celled className="grid-container">
                <Grid.Row>
                <Grid.Column width={3}>
                    <SideBar />
                </Grid.Column>
                <Grid.Column width={10}>
                    {props.children}
                </Grid.Column>
                {
                props.type === "blog" &&
                <Grid.Column width={3}>
                    RightSideBar
                </Grid.Column>
                }
                </Grid.Row>

            </Grid>
            <Footer /> 
        </div>
    )
}
