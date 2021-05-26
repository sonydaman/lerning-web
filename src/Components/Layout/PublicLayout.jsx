import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const PublicLayout = (props) => {
    return (
        <div>
           <Header />
            <Grid celled>
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
