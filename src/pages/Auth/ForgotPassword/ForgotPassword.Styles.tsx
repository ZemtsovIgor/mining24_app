import styled from 'styled-components';


export const ForgotPasswordStyles: any = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  font-family: var(--montserrat);

  .forgotPassword {
    &__image {
      flex: 1;
      background-image: url('/img/auth/auth_image.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
    &__container {
      display: flex;
      position: relative;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex: 1;
      width: 100%;
    }

    &__lang {
      &-wrap {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 2.5rem 2.8rem 0 2.8rem;
      }
    }

    &__wrap {
      display: flex;
      position: relative;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;
      width: 100%;
    }

    &__box {
      width: 100%;
      text-align: center;
      padding: 0 120px;
      margin-top: -95px;
    }

    &__title {
      margin: 0 0 14px;
    }

    &__text {
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      color: var(--black);
      margin: 0;
      margin-right: 12px;

      &-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 36px;
      }

      &-link {
        color: var(--light-green);
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      }
    }

    &__button {
      width: 100%;
      flex: 1;

      &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 22px;
        grid-gap: 16px;
      }
      
      &-link {
        flex: 1;
        display: inline-block;
        text-align: center;
        color: var(--white);
        border-radius: var(--border-radius);
        border: none;
        background-color: var(--light-gray);
        padding: 12px 20px;
        transition: background-color 0.3s, border-color 0.3s, color 0.3s;
        cursor: pointer;
        outline: none;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      }
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 14px;

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
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--white);
    margin: 12px 0;

    &-wrap {
      width: calc(100% - 48px);
      position: absolute;
      background: var(--red);
      border-radius: var(--border-radius);
      text-align: center;
      top: 40px;
    }
  }

  @media only screen and (max-width: 48.1em) { //768px
    .forgotPassword {
      &__container {
      }

      &__box {
        padding: 0 17px;
        margin-top: -260px;
      }

      &__title {
        margin: 0 0 16px;
        font-size: 28px;
        line-height: 36px;
      }

      &__text {
        &-wrap {
          margin-bottom: 20px;
        }
      }

      &__button {
        &-wrap {
          margin-top: 12px;
          flex-direction: column;
          gap: 8px;
        }
      }

      &__links {
        margin-top: 16px;
      }
    }

    .error {
      &__text {
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;

        &-wrap {
          width: calc(100% - 32px);
          top: 16px;
        }
      }
    }
  }
`;
