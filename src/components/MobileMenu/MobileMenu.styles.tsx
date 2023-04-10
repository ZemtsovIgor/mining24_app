import styled from 'styled-components';

export const MobileMenuWrapper: any = styled.div`
  position: sticky;
  z-index: 999;
  bottom: 0;
  width: 100vw;
  height: 56px;
  font-family: var(--montserrat);
  
  .mobileMenu {
    &-wrap {
      display: flex;
      flex-wrap: wrap;
      padding: 6px 4px;
      width: 100%;
      height: 100%;
      background: var(--white);
    }

    &-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      fill: #5F698D;
      
      svg {
        width: 20px;
        min-width: 20px;
        fill: #5F698D;
        margin-bottom: 6px;
        transition: fill 0.3s ease-in-out, stroke 0.3s ease-in-out;
      }
    }

    &-burger {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      width: 20px;
      height: 20px;
      background: 0 0;
      border: 0;
      cursor: pointer;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
      outline: 0;
      overflow: hidden;
      margin-bottom: 6px;

      & .x, .y, .z {
        display: block;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        background: #060931;
        width: 100%;
        height: 2px;
        transition: all 200ms ease-out;
      }

      & .x {
        top: -13px;
      }

      & .z {
        top: 13px;
      }
    }

    &-item {
      flex: 1;
      flex-grow: 1;

      &.-active {
        svg {
          fill: var(--green);
        }

        .mobileMenu-text {
          color: var(--green);
        }
      }

      &.-opened {
        
        & .mobileMenu-burger {
          width: 20px!important;
          height: 20px!important;
        }

        & .x {
          top: 0!important;
          transform: rotate(45deg);
          transition: all 100ms ease-out;
        }

        & .y {
          display: none!important;
        }

        & .z {
          top: 0!important;
          transform: rotate(135deg);
          transition: all 100ms ease-out;
        }
      }
    }
  }

  @media only screen and (min-width: 48em) { //768px
    display: none;
  }
`;
