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
    }
  }

  @media only screen and (min-width: 48em) { //768px
    display: none;
  }
`;
