import styled from 'styled-components';

export const LoginStyles: any = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-family: var(--montserrat);

  .login {
    &__container {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 456px;
    }

    &__box {
      position: relative;
      width: 100%;
      text-align: left;
    }

    &__title {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      margin: 0 0 6px;
    }
    
    &__text {
      font-weight: 400;
      font-size: 14px;
      line-height: 32px;
      color: var(--black);
      margin: 0;
      margin-right: 3px;
      
      &-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
      }
      
      &-link {
        color: var(--blue);
        font-weight: 700;
        font-size: 14px;
        line-height: 32px;
      }
    }

    &__button {
      width: 100%;
      
      &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 42px;
      }
    }
    
    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 19px;

      &-link {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.134065px;
        text-transform: capitalize;
        color: var(--blue);
      }
    }
  }

  .error__text {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    color: var(--white);
    
    &-wrap {
      width: 100%;
      position: absolute;
      background: var(--red);
      border-radius: var(--border-radius);
      text-align: center;
      top: -122px;
    }
  }
`;
