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

  .modal {
    &__dialog {
      position: relative;
      background: #F7F7FA;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.02);
      border-radius: 8px;
      padding: 40px 30px;
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
    
    &__close {
      &-btn {
        top: 0;
        right: -36px;
        background: #B7BCCE;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        position: absolute;
        border: 0;
        cursor: pointer;
        transition: opacity 0.5s ease-in-out;
        outline: none;
      }

      &:hover {
        opacity: 0.8;
      }
    }
    
    &-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 36px;
      color: var(--black);
      text-align: center;
      white-space: pre-line;
      margin: 0;
    }
    
    &-text {
      margin: 0;
      margin-top: 20px;
      white-space: pre-line;
      text-align: center;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--black);
    }

    &-btn {
      background: var(--light-green);
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      padding: 16px 24px;
      border-radius: var(--border-radius);
      color: var(--white);

      &__wrap {
        margin-top: 20px;
        text-align: center;
      }
    }
    
    &-icon {
      display: block;
      margin: 0 auto;
      margin-bottom: 24px;
    }
    
    &-social__wrap {
      margin-top: 20px;
    }
  }


  &.canselContract {
    & .modal {
      &__dialog {
        padding: 25px 20px;
      }
      
      &-btn {
        flex: 1;
        background: var(--red);
        padding: 16px 60px;
        
        &__wrap {
          display: flex;
          gap: 20px;
        }
        
        &.-gray {
          background: var(--light-gray);
        }
      }
    }
  }

  @media (max-width: 992px) {
  
  }
`;
