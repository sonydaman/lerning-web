import React from 'react'
import propTypes from 'prop-types'
import Achievement from '../Components/Achievement'
import Achievements from '../Components/Achievements'
export const CapsPage = props => {
    return (
        <div className="tab-page">
            <Achievements items={
                [
                    { title: 'text1', img: 'https:unsplash.it/200/200', description: 'veritatis? Quaerat rem veniam nihil? Sequi commodi quibusdam iste voluptatibus omnis consequuntur, accusamus at voluptatum adipisci perferendis quod minima sunt, non velit nulla earum quis vel voluptates aut dignissimos alias dolorum? Nisi ut est iusto molestias inventore necessitatibus corrupti libero repellendus? Quisquam a assumenda officiis blanditiis accusantium nam, totam voluptas eius ad eveniet itaque ipsum vero aut rem dolore corrupti obcaecati! Aliquid, corporis. Corporis minus iure libero. Quod quisquam perferendis iste laudantium totam nisi rem hic ullam? Quos, provident nisi error, suscipit quae exercitationem perspiciatis nesciunt beatae modi enim, impedit molestiae! Quas provident, quae neque non sed aperiam accusantium illum labore recusandae consequatur explicabo laborum quo, doloribus sint perspiciatis, optio est magnam nobis! Obcaecati veniam asperiores molestias qui perferendis adipisci exercitationem. Atque deleniti necessitatibus debitis ullam sit nemo voluptatibus perferendis esse nam, dolor laborum. Tenetur molestias quia soluta laborum unde deserunt animi, rerum tempore ullam possimus, nulla voluptates omnis expedita alias. Aut, quasthis is a page this is a row this is column this is a queue this is a view' },
                    { title: 'text2', img: 'https:unsplash.it/200/200', description: 'this is a build this is a brokr this is a caps' },
                    { title: 'text3', img: 'https:unsplash.it/200/200', description: 'veritatis? Quaerat rem veniam nihil? Sequi commodi quibusdam iste voluptatibus omnis consequuntur, accusamus at voluptatum adipisci perferendis quod minima sunt, non velit nulla earum quis vel voluptates aut dignissimos alias dolorum? Nisi ut est iusto molestias inventore necessitatibus corrupti libero repellendus? Quisquam a assumenda officiis blanditiis accusantium nam, totam voluptas eius ad eveniet itaque ipsum vero aut rem dolore corrupti obcaecati! Aliquid, corporis. Corporis minus iure libero. Quod quisquam perferendis iste laudantium totam nisi rem hic ullam? Quos, provident nisi error, suscipit quae exercitationem perspiciatis nesciunt beatae modi enim, impedit molestiae! Quas provident, quae neque non sed aperiam accusantium illum labore recusandae consequatur explicabo laborum quo, doloribus sint perspiciatis, optio est magnam nobis! Obcaecati veniam asperiores molestias qui perferendis adipisci exercitationem. Atque deleniti necessitatibus debitis ullam sit nemo voluptatibus perferendis esse nam, dolor laborum. Tenetur molestias quia soluta laborum unde deserunt animi, rerum tempore ullam possimus, nulla voluptates omnis expedita alias. Aut, quas' }

                ]

            }
            />
        </div>

    )
}
CapsPage.propTypes = {

}

export default CapsPage

