import styled from 'styled-components'


export const HeaderStyle = styled.div`
    background-color: tomato;

    ul{
        display: flex;
        gap: 2em;
        justify-content: space-around;
        height: 100px;
        align-items: center;

        li{
            list-style: none;
            color:#fff;
            height: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 20%;

            &:hover{
                background-color: #fff;
                color:#000;
                cursor: pointer;
            }

            a{
                display:block
            }
        }
    }
`
