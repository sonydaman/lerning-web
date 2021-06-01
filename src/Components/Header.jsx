import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Button, Container, Dropdown, Image, Menu } from "semantic-ui-react";
import { HeaderStyle } from '../Styles/Header'
export const Header = (props) => {
  return (
    <HeaderStyle className="header">
        <Menu fixed='top' inverted>
      <Container>
        <Menu.Item header>
          <Image size='mini' src='https://unsplash.it/200/200?id=2' style={{ marginRight: '1.5em' }} />
          CRYSTELS
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
            {/* <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Others</span>
              <Dropdown.Menu>
                <Dropdown.Item style={{ color: 'black' }}><Link to="/blog">Blog</Link></Dropdown.Item>
                <Dropdown.Item style={{ color: 'black' }}>
                <Link to="/contact">Contact Us</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item> */}
            {/* <Dropdown.Item>List Item</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <Button positive>Log In</Button>
        </div>
        <div>
          <Button positive>New User</Button>
        </div>
      </Container>
    </Menu>


      {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          
      </ul> */}
    </HeaderStyle>
  );
};
