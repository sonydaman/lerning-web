import React from "react";
import { Image } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import { HeaderStyled } from '../Styles/Header'
export const Header = (props) => {

  
  return (
    <HeaderStyled>
        <div className="nav-left">
        <Image size='mini' src='https://unsplash.it/200/200?id=2' circular />
          <h2>
            CRYSTALS
          </h2>
          <button><a href="/home">Home</a></button>
            
          <button><a href="/about">About</a></button>
              
          <button><a href="/gallery">Gallery</a></button>
            
          <button><a href="/blog">Blog</a></button>
            
          <button><a href="/contact">Contact</a></button>

          
                 
        </div>
        <div className="nav-right">
          <button className="toggle"><a href="/contact">More</a></button>
        </div>

{/*       
        <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
        <Image size='mini' src='https://unsplash.it/200/200?id=2' circular />
        <h2>
          CRYSTELS
        </h2>        
        </Menu.Item>
        <Menu.Item as='a'>
        <Link to="/home">Home</Link>
          </Menu.Item>
        <Dropdown item simple text='Others'>
          <Dropdown.Menu>
            <Dropdown.Item>
            <Link to="/about" style={{ color: 'black' }}>About</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/gallery" style={{ color: 'black' }}>Gallery</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/blog" style={{ color: 'black' }}>Blog</Link>
            </Dropdown.Item>
            <Dropdown.Item>
            <Link to="/contact" style={{ color: 'black' }}>Contact Us</Link>
            </Dropdown.Item>            
          </Dropdown.Menu>
        </Dropdown>
        <div className="btn-acc">
          <Button positive>Log In</Button>
        </div>
        <div className="btn-acc">
          <Button positive>New User</Button>
        </div>
      </Container>
    </Menu> */}
    </HeaderStyled>
  );
};
