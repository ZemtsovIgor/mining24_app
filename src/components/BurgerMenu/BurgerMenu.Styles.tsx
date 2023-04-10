import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const MobileMenuComponent:any = styled('div')`
  font-family: var(--montserrat);
  
  .is-drilldown {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 8px 3px;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0 3px;
    padding-top: 8px;
    
    &-logo {
      display: block;
      width: 7rem;
    }
    
    &-btn {
      background: none;
      border: 0;
      outline: none;
      box-shadow: none;
      padding: 0;
      margin-right: 2px;
    }
  }
  
  .menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 3px;
    flex-grow: 1;

    .menu {
      &__line {
        width: 100%;
        height: 0;
        margin: 13px 0;
        border: 1px solid #EFEFEF;
      }
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
      margin-top: 4px;

      span {
        margin-left: 17px;
      }
    }
  }
  
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 42px;

    &-name {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.134065px;
      text-transform: capitalize;
      color: #004A88;

      &__wrap {

      }
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
  font-family: var(--montserrat);

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
