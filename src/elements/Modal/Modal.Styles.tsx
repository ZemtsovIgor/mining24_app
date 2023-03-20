import styled from 'styled-components';

export const ModalStyles: any = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(155, 156, 157, 0.4);
  backdrop-filter: blur(20px);
  z-index: 9999;

  .modal__dialog {
    margin: 16px;
    position: relative;
    background: #DAE9FF;
    border-radius: 8px;
    padding: 24px;
    display: none;
    animation: fadeIn 0.5s cubic-bezier(0.65, 0, 0.35, 1);

    &.active {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .modal__close {
    padding: 3px;
    position: absolute;
    background-color: transparent;
    border: 0;
    color: var(--white);
    cursor: pointer;
    transition: opacity 0.5s ease-in-out;
    outline: none;

    &:hover {
      opacity: 0.8;
    }
  }

  .modal__title {
    margin: 0 0 30px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: var(--light);
  }

  &.partners-modal {
    .modal__dialog {
      padding: 40px 30px;
      max-width: 1070px;
    }

    .modal__close {
      top: 47px;
      right: 30px;
    }

    .user-item {
      margin-bottom: 15px;
    }

    .user-item__status {
      margin: 0 75px 0 0;
    }
  }

  &.level-modal {
    background-color: transparent;

    .modal__dialog {
      max-width: 425px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
      box-shadow: none;
    }

    .modal__close {
      display: none;
    }

    .modal__title {
      margin: 0 0 50px;
      text-align: center;

      span {
        display: block;
      }
    }

    .status {
      width: 290px;
      height: 290px;
    }
  }

  &.start-modal {
    background-color: rgba(41, 47, 57, 0.6);

    .modal__dialog {
      max-width: 435px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
      box-shadow: none;
    }

    .modal__close {
      display: none;
    }

    .modal__logo {
      margin-bottom: 80px;
    }

    .modal__title {
      margin: 0 0 25px;
      font-weight: 700;
      font-size: 35px;
      line-height: 43px;
      text-align: center;

      span {
        display: block;
      }
    }

    .modal__text {
      margin: 0;
      font-weight: 700;
      font-size: 25px;
      line-height: 30px;
      text-align: center;
      color: #eaeaea;

      span {
        display: block;
      }
    }

    .modal__text_big {
      margin: 10px 0 20px;
      font-size: 35px;
      line-height: 43px;
    }

    .modal__text_small {
      margin: 0 0 10px;
      font-size: 20px;
      line-height: 24px;
    }

    .modal__timer-box {
      position: relative;
      display: inline-block;
      padding-right: 35px;
      text-align: center;

      &::after {
        content: '\\003A';
        position: absolute;
        top: 0;
        right: 10px;
        font-weight: 700;
        font-size: 50px;
        line-height: 55px;
        background-image: linear-gradient(180deg, #e9b9e9 0%, #ffffff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        color: var(--white);
      }

      &:last-child {
        padding-right: 0;

        &::after {
          display: none;
        }
      }
    }

    .modal__timer-total {
      font-weight: 700;
      font-size: 50px;
      line-height: 65px;
      background-image: linear-gradient(180deg, #e9b9e9 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--white);
    }

    .modal__timer-descr {
      display: block;
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      background-image: linear-gradient(180deg, #e9b9e9 0%, #ffffff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: var(--white);
    }
  }

  &.understanding-modal {
    .modal__dialog {
      max-width: 480px;
      padding: 45px;
    }

    .modal__close {
      display: none;
    }

    .modal__checkbox {
      margin: 0 0 20px;
      display: flex;
      justify-content: center;

      a {
        display: inline;
      }

      .MuiFormControlLabel-label {
        font-size: 12px;
      }
    }
  }

  &.settings-modal {
    .modal__dialog {
      max-width: 480px;
      padding: 45px 30px;
      text-align: center;
    }

    .modal__close {
      top: 20px;
      right: 20px;

      svg {
        width: 15px;
        height: 15px;
      }
    }

    .modal__title {
      margin: 0 0 20px;
    }

    .modal__text {
      margin: 0 0 20px;
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
    }

    .modal__resend {
      margin: 0 0 40px;
      padding: 0;
      font-weight: 700;
      font-size: 14px;
      line-height: 23px;
      text-decoration: underline;
      border: none;
      background-color: transparent;

      &:focus {
        outline: none;
        color: var(--light-gray);
        box-shadow: none;
        background-color: transparent;
      }

      &:hover {
        color: var(--gray);
        box-shadow: none;
        background-color: transparent;
      }
    }

    .modal__input {
      margin: 0 0 35px;
    }
  }

  &.loading-modal {
    .modal__dialog {
      max-width: 435px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
      box-shadow: none;
    }

    .modal__close {
      display: none;
    }

    svg {
      width: 180px;
      height: 180px;
      animation: rotate 1s linear infinite;
    }
  }

  &.-light {
    &.level-modal {
      .modal__dialog {
        background-color: transparent;
        box-shadow: none;
      }

      .modal__title {
        color: var(--brown);
      }
    }

    .modal__title {
      color: var(--brown);
    }

    .modal__resend {
      color: var(--brown);
    }

    .modal__dialog {
      background: #ffffff;
      box-shadow: 0 0 11px rgba(0, 0, 0, 0.04);
    }

    .user-item__name {
      color: var(--brown);
    }

    .user-item__partners {
      color: var(--brown);
    }

    .user-item:before {
      background: url("data:image/svg+xml,%3Csvg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 1.5L5.5 5.5L1 1.5' stroke='%23434343' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
        center / contain no-repeat;
    }

    .user-item:after {
      background-image: linear-gradient(
        90deg,
        rgba(0, 71, 255, 0.12) 0%,
        rgba(196, 196, 196, 0) 78.12%
      );
    }

    .gradient {
      background-image: linear-gradient(180deg, #e9b9e9 0%, #7a007a 100%);
    }

    .modal__close svg {
      fill: var(--brown);
      stroke: var(--brown);
    }

    &.start-modal {
      .modal__dialog {
        background-color: transparent;
        box-shadow: none;
      }
    }

    &.understanding-modal {
      .modal__description {
        color: var(--brown);
      }
    }

    &.loading-modal {
      .modal__dialog {
        background-color: transparent;
        box-shadow: none;
      }
    }
  }

  @media (max-width: 992px) {
    &.partners-modal {
      .modal__dialog {
        padding: 30px 15px;
        max-width: 440px;
      }

      .modal__title {
        font-size: 16px;
        line-height: 20px;
      }

      .modal__close {
        top: 30px;
        right: 15px;

        svg {
          width: 15px;
        }
      }

      .user-item {
        margin-bottom: 15px;
      }

      .user-item__status {
        margin: 0 75px 0 0;
      }
    }

    &.level-modal {
      .status {
        width: 200px;
        height: 200px;
      }
    }

    &.start-modal {
      .modal__logo {
        display: block;
        margin-bottom: 40px;
      }

      .modal__title {
        margin: 0 0 15px;
        font-weight: 700;
        font-size: 22px;
        line-height: 33px;

        span {
          display: block;
        }
      }

      .modal__text {
        font-size: 18px;
        line-height: 25px;

        span {
          display: block;
        }
      }

      .modal__text_big {
        margin: 10px 0 20px;
        font-size: 22px;
        line-height: 30px;
      }

      .modal__text_small {
        margin: 0 0 10px;
        font-size: 16px;
        line-height: 20px;
      }

      .modal__timer-box {
        padding-right: 28px;

        &::after {
          font-size: 32px;
          line-height: 38px;
        }
      }

      .modal__timer-total {
        font-size: 32px;
        line-height: 38px;
      }

      .modal__timer-descr {
        display: block;
        font-size: 12px;
        line-height: 16px;
      }
    }

    &.settings-modal {
      .modal__dialog {
        padding: 35px 20px;
      }

      .modal__close {
        top: 10px;
        right: 10px;
      }

      .modal__title {
        margin: 0 0 20px;
        font-size: 16px;
        line-height: 20px;
      }

      .modal__text {
        margin: 0 0 20px;
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
      }

      .modal__resend {
        margin: 0 0 20px;
        font-size: 12px;
        line-height: 20px;
      }

      .modal__input {
        margin: 0 0 25px;
      }
    }

    &.loading-modal {
      svg {
        width: 100px;
        height: 100px;
      }
    }

    &.understanding-modal {
      .modal__dialog {
        padding: 25px 15px;
      }
    }
  }
`;
