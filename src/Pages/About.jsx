import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { AboutStyled } from '../Styles/About'

export const About = () => {
    return (
        <AboutStyled>
            <h1>About Us</h1>
            <hr />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, animi assumenda illum molestias nihil quas hic neque quidem doloribus ea, praesentium voluptas, doloremque autem possimus? Non quam dicta ea ipsa.
                Odio consequuntur eos porro, modi sit libero asperiores, blanditiis repellendus unde repudiandae doloremque exercitationem beatae illo facere quisquam, corporis cum velit tempora deserunt laboriosam voluptates quam quis possimus? Doloribus, aspernatur.
                Vel nam, esse fugiat accusantium inventore hic, alias voluptatem quos, sed ex excepturi! Eos nam, inventore ipsam atque facere alias nemo distinctio obcaecati dolore soluta nostrum, autem cumque ut quaerat.
                Voluptas maxime optio praesentium sint repellendus aperiam neque labore totam provident, esse libero vero exercitationem minima magni ducimus molestiae fugiat repudiandae laudantium minus, nostrum distinctio perferendis. Facilis quisquam magni explicabo.
                Eos, aliquid labore! Vel, commodi at ipsa qui culpa reiciendis mollitia ad maiores laudantium tenetur distinctio? Saepe, modi debitis maiores eaque laborum harum eveniet omnis accusamus minus, quae neque consequuntur.
                Itaque error sed molestiae est fugiat quas maiores? Quo in dignissimos quis inventore, nam non at veritatis magni ex quibusdam molestias. Omnis tempore possimus explicabo non iste illo reprehenderit debitis.
                Hic culpa, debitis et excepturi error fuga eveniet sit maxime, sequi ex maiores aspernatur fugiat laudantium? Iure, voluptatibus aspernatur quia doloribus ipsam quisquam impedit incidunt fugit quae, cupiditate itaque expedita.
                Aut quae unde ratione, dolorum dolorem excepturi ipsa, non sint doloremque doloribus sit illum voluptates assumenda error sapiente veniam quod nemo. Dolorem dignissimos neque deleniti repellat, praesentium beatae modi laborum?
                Nihil blanditiis veniam tenetur voluptatibus asperiores voluptate consectetur minima? Dicta minus eum minima iusto incidunt deserunt fuga nihil dolorum dolorem temporibus, voluptates, ut eos, soluta corrupti facere amet aperiam hic?
                Temporibus est ratione laudantium ducimus laborum reprehenderit velit hic quibusdam impedit sequi inventore, deserunt vitae at? Doloribus velit suscipit, voluptas in reprehenderit vel molestias cupiditate maxime ducimus, unde, corrupti nobis.
            </p>
            <h1>Our Team</h1>
            <hr />
            <div className="Cards">
            <Card.Group>
              <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Soni Daman</Card.Header>
                  <Card.Meta>Manager</Card.Meta>
                  <Card.Description>
                    Matthew is a pianist living in Nashville.
                  </Card.Description>
                </Card.Content>
              </Card>

              <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content>
                  <Card.Header content='Maninder' />
                  <Card.Meta content='Senior Engineer' />
                  <Card.Description content='Jake is a drummer living in New York.' />
                </Card.Content>
              </Card>

              <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
                <Card.Content
                  header='Kushal'
                  meta='Senior Engineer'
                  description='Elliot is a music producer living in Chicago.'
                />
              </Card>

              <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
              <Card.Content
                header='Nidhi Bhatnagar'
                meta='Senior Engineer'
                description='Jenny is a student studying Media Management at the New School'
              />
              </Card>
            </Card.Group>
            </div>
        </AboutStyled>
    )
}
