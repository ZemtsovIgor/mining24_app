import styled from 'styled-components';

export const RegistrationStyles: any = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-family: var(--montserrat);

  .registration {
    &__container {
      margin: 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 456px;
    }

    &__box {
      width: 100%;
      text-align: left;
    }

    &__title {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
    }

    &__button {
      &-wrap {
        display: flex;
        justify-content: center;
        margin-top: 18px;
      }
    }
  }

  .error-text {
    margin: 5px 0;
    color: var(--red);
    font-size: 12px;
    line-height: 14px;
    text-align: left;
  }
`;
