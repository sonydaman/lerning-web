import React from 'react'
import { Container, Feed, Form, Grid, Icon, Image } from 'semantic-ui-react'
export const Gallery = () => {
  return(
        <div>
        <Form>
    <Form.Field>
      <label>Gallery Review by User</label>
      <input />
    </Form.Field>
  </Form>
        <Container>
        Gallery
        <Image src='https://unsplash.it/1000/400' />
      
        <p>
      
        An " art gallery " is one of the medium or outlet through which the works of art are marketed. It is the wholesale or retail establishment through which one can acquire ownership of an item of art either for personal enjoyment or resale. The art gallery has a physical location.
    </p>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=1'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=2' />
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=3'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=4'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=5' />
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=6'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=7'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=8' />
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
      <Grid.Column>
        <Image src='https://unsplash.it/500/400?id=9'/>
        <p>An " art gallery " is one of the medium</p>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Feed>
                <Feed.Event>
                  <Feed.Label>
                    <img src='https://unsplash.it/500/400?id=10' alt =""/>
                  </Feed.Label>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Elliot Fu</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
            
                <Feed.Event>
                  <Feed.Label image='https://unsplash.it/500/400?id=11'/>
                  <Feed.Content>
                    <Feed.Summary>
                      <a href ="tag">Helen Troy</a> added <a href="tag">2 new illustrations</a>
                      <Feed.Date>4 days ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a href="img">
                        <img src='https://unsplash.it/500/400?id=12' alt="img"/>
                      </a>
                      <a href="img">
                        <img src='https://unsplash.it/500/400?id=13' alt="img"/>
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' />1 Like
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                </Feed>
  </Container>
  </div>
  )
}
