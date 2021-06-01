import styled from "styled-components";

export const HeaderStyled = styled.div`
    
    padding: 0px;
    margin: 0px;
    background-color: #040438;
    color: #a4acac;
    width: 100%;
    height: 80px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;

    

    .nav-left{
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h2{
            margin-top: 2%;
            margin-right: 40px;
            margin-left: 20px;
        }
        
        button{
            width: 10%;
            height: 35%;
            margin-left: 1%;
            border: 1px solid;
            border-radius: 5px;
            background-color: #242425;
            cursor: pointer;
            
            a{
            font-size: 100%;
            text-align: center;
            color: cyan;         
        }
        

            &:hover{
                background-color: #6b6b6a;
            }
        }
        .toggle{
            display: none;
        }   
        
    }
    .nav-right{
        flex: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        button{
            width: 10%;
            height: 35%;
            margin-left: 1%;
            display: none;
            border: 1px solid;
            border-radius: 5px;
            background-color: #242425;
            cursor: pointer;
            
            a{
            font-size: 100%;
            text-align: center;
            color: cyan;         
        }
        }
    }

    @media (max-width: 768px) {
    .nav-left{
        button{
            display: none;
            margin-right: -400px;
            a{
                font-size: 100%;
            }
        }
        .toggle{
            display: flex;
        }
    }
  }
    /* h2{
        margin-left: 10px;
        margin-top: -3px;
    }

.ui[class*="top fixed"].menu {
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: #484e4e;   

    .ui.mini.image, .ui.mini.images .image, .ui.mini.images img, .ui.mini.images svg {
        width: 50px;
        height: auto;
        font-size: .78571429rem;
        border: 2px solid blue;
    }
    .ui.positive.button {
        box-shadow: 0 0 0 0 rgb(34 36 38 / 15%) inset;
        margin-top: 20px;
        margin-left: auto;
        margin-right: 10px;
    } 
} */
`