import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const SidebarWrapper: any = styled.aside`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  flex: 0 0 260px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 31px 31px 22px;
  background: var(--white);
  min-height: 100vh;
  font-family: var(--montserrat);
  
  .logo {
    display: block;
    position: relative;
    width: 168px;
    padding-left: 6px;
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
  flex-grow: 1;
`;

export const MenuList: any = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  flex-grow: 1;

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
    margin-top: 54px  
  }

  &:last-child {
    margin-top: auto;
  }

  button {
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #EF2216;
    
    span {
      margin-left: 17px;
    }
  }
`;

export const MenuListLink: any = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 48px;
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
    margin-right: 18px;
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

