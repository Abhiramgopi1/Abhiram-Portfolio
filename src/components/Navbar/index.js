import React from "react";
import { DiCssdeck } from "react-icons/di";
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { FaBars } from 'react-icons/fa'; 
import { Bio } from '../../data/constants';

const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
      transition: 0.8s all ease;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    @media screen and (max-width: 640px) {
      padding: 0 0px;
  }
`;

export const Span = styled.span`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    &:hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: ${({ open }) => (open ? '1' : '-1')};

`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    return (
    <Nav>
        <NavbarContainer>
            <NavLogo to="/">
                <a style={{
                    display: "flex",
                    alignItems: "center",
                    color: "white",
                    marginBottom: "20",
                    cursor: "pointer",
                   }}
                >
                    <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
                </a>
            </NavLogo>
            <MobileIcon>
               <FaBars onClick={() => {
                setOpen(!open);
                }} />
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#skills">Skills</NavLink>
                <NavLink href="#experience">Experience</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#education">Education</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </NavItems>
            <ButtonContainer>
                <GitHubButton href={Bio.github} target='display'>Github Profile</GitHubButton>
            </ButtonContainer>
        </NavbarContainer>
        {
            open && (
            <MobileMenu open={open}>
                <MobileMenuLinks href="#about" onClick={() => {
              setOpen(!open)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks href='#skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLinks>
            <MobileMenuLinks href='#experience' onClick={() => {
              setOpen(!open)
            }}>Experience</MobileMenuLinks>
            <MobileMenuLinks href='#projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks href='#education' onClick={() => {
              setOpen(!open)
            }}>Education</MobileMenuLinks>
            <GitHubButton 
                style={{
                padding: '10px 16px',
                background: `${theme.primary}`, 
                color: 'white',
                width: 'max-content'}} 
                href={Bio.github}
                target="display"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>

            ) 
        }

    </Nav>
    );
};

export default Navbar;