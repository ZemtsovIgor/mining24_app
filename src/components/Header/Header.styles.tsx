import styled from 'styled-components';

export const HeaderWrapper: any = styled.header`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 19px 26px;
  font-family: var(--montserrat);
  
  .header {
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    
    &-logo {
      display: none;
      position: relative;
      width: 110px;
    }
    
    &-title {
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: var(--black);
      
      &__wrap {
        
      }
    }

    &-lang {
      &__wrap {
        margin-left: auto;
        margin-right: 33px;
      }
    }

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

  @media only screen and (max-width: 48.1em) { //768px
    background: var(--white);
    padding: 20px 19px 13px;
    
    .header {
      &-logo {
        display: block;
      }
      
      &-title {
        &__wrap {
          display: none;
        }
      }
      
      &-lang {
        &__wrap {
          display: none;
        }
      }
    }
  }
`;
