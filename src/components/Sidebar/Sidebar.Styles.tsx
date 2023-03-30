import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const SidebarWrapper: any = styled.aside`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex: 0 0 251px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: var(--white);
  min-height: 100vh;
  border-right: 1px solid #EBECF1;
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.01);
  font-family: var(--montserrat);
  
  .logo {
    display: block;
    position: relative;
    width: 160px;
  }

  @media only screen and (max-width: 48.1em) { //768px
    display: none;
  }
`;

export const Menu: any = styled.nav`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
`;

export const MenuList: any = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  
  .menu {
    &__line {
      width: 100%;
      height: 0;
      margin: 20px 0;
      border: 1px solid #EFEFEF;
    }
  }
`;

export const MenuListItem: any = styled.li`
  overflow: hidden;

  &:first-child {
    margin-top: 59px  
  }


  @media (max-width: 992px) {
    &:last-child {
      margin: 0 0 auto;
    }
  }
`;

export const MenuListLink: any = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--black);
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  span {
    display: block;
  }

  svg {
    width: 20px;
    min-width: 20px;
    fill: var(--black);
    margin-right: 23px;
    transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
  }

  &.active {
    color: var(--green);
    font-weight: 700;
    background-repeat: no-repeat;

    svg {
      fill: var(--green);
    }
  }
`;

