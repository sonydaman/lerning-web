import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Footer } from '../Footer'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const Layout = (props) => {
    return (
        <div>
            <Header />
            <Grid celled>
                <Grid.Row>
                <Grid.Column width={3}>
                    <SideBar />
                </Grid.Column>
                <Grid.Column width={13}>
                    {props.children}
                </Grid.Column>
                </Grid.Row>

            </Grid>
            <Footer />
        </div>
    )
}
