import styled from 'styled-components';


export const ForgotPasswordStyles: any = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-family: var(--montserrat);

  .forgotPassword {
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
      padding: 12px 12px;
      display: inline-block;
      text-align: center;
      color: var(--white);
      border-radius: var(--border-radius);
      border: none;
      background-color: var(--blue);
      transition: background-color 0.3s, border-color 0.3s, color 0.3s;
      cursor: pointer;
      outline: none;

      &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 19px;
        grid-gap: 10px;
      }
      
      &-link {
        display: inline-block;
        width: 100%;
        border: 1px solid var(--blue);
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.134065px;
        text-transform: capitalize;
        color: var(--blue);
        border-radius: var(--border-radius);
        padding: 12px 12px;
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
        cursor: pointer;
        outline: none;
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
