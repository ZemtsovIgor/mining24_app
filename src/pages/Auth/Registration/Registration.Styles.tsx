import styled from 'styled-components';

export const RegistrationStyles: any = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  font-family: var(--montserrat);

  .registration {
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
      margin-top: 30px;
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
    
    &__hint {
      margin-bottom: 17px;
      background: var(--white);
      border-radius: var(--border-radius);
      padding: 3px 20px;
      margin-top: -7px;
      
      &-list {
        list-style: none;
        text-align: left;
      }
      
      &-item {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--black700);
        margin: 6px 0;
        
        &:before {
          content: '';
          display: inline-block;
          background-color: var(--light-green);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 8px;
        }
      }
    }

    &__button {
      width: 100%;

      &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 22px;
      }
    }

    &__links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 14px;

      &-link {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: var(--light-green);
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
      top: 116px;
    }
  }

  @media only screen and (max-width: 48.1em) { //768px
    .registration {
      &__container {
      }

      &__box {
        padding: 0 17px;
        margin-top: -68px;
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
        }
      }

      &__links {
        margin-top: 16px;
      }

      &__hint {
        margin-top: -3px;
        margin-bottom: 7px;
        
        &-item {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          margin: 7px 0;
        }
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
