import React from 'react'
import { Link } from 'react-router-dom';
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

const FixedMenuLayout = () => (
    <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
            TodoList - MOL (Mediação Online)
          </Menu.Item>
          <Menu.Item><Link to="/">Home</Link></Menu.Item>
          <Menu.Item><Link to="/about">Sobre</Link></Menu.Item>
        </Container>
      </Menu>
    </div>
  )
  
  export default FixedMenuLayout