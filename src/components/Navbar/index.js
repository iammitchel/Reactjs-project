import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer, 
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavbarElemant';


const Navbar = () => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'>GINAGLITZ </NavLogo>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='pricing'>Pricing</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Pages'>Pages</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='Contact'>Contact</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/Shop'>Shop</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar