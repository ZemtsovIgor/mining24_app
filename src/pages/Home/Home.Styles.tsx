import styled from 'styled-components';

export const HomeContainer: any = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--montserrat);

  .home {
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);
      
      &_wrap {
        margin-top: 40px;
        margin-bottom: 24px;
      }
    }
    
    &.-big {
      
    }
  }
  
  .wallet {
    &-refill {
      background: var(--white);
      box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      padding: 32px 32px 18px;
      
      &__wrap {
        display: flex;
        width: 100%;
        flex-direction: column;
      }
      
      &__balance {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: var(--black);
        
        &_wrap {
          margin-bottom: 16px;
        }
        
        &_icon {
          margin-right: -3px;
        }
      }
      
      &__btns {
      }
      
      &__btn {
        display: flex;
        width: 100%;
        background: conic-gradient(from 194.89deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 234.81deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 223.81deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
        border-radius: 7px;
        margin-bottom: 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #00CF3D;
        align-items: center;
        padding: 9px;
        justify-content: center;
        
        &_icon {
          margin-right: 8px;
        }
        
        &.-green {
          background: linear-gradient(94.02deg, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%), #1BE046;
          color: var(--white);
          margin-bottom: 14px;
        }
      }
    }
    
    &-share {
      background: var(--white);
      box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      
      &__wrap {
        display: flex;
        width: 100%;
      }
      
      &__container {
        padding: 11px 17px 21px 30px;
        width: 100%;
      }
      
      &__cell {
      }
      
      &__image {
        &_wrap {
          display: flex;
        }
      }

      &__ref {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-top: 37px;
        width: 100%;
      }
      
      &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: var(--black);
        
        &_wrap {
          margin-bottom: 9px;
        }
      }
      
      &__rewards {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: var(--black);
        
        &_wrap {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
      }
      
      &__icon {
        margin: 0 16px;
      }
      
      &__input {
        &_wrap {
          
        }
      }
    }
  }

  @media only screen and (max-width: 48.1em) { //768px
    .home {
      &-title {
        &_wrap {
          margin-top: 32px;
          margin-bottom: 15px;
        }
      }

      &.-big {

      }
    }
    
    .home-title_wrap {
      &.-big {
        margin-top: 8px;
        margin-bottom: 16px;
        & .home-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
          color: var(--black);
        }
      }
    }
    
    .wallet {
      gap: 16px;
      
      &-refill {
        padding: 24px 16px;
        
        &__balance {
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
          
          &_wrap {
            display: flex;
            align-items: center;
          }

          &_icon {
            margin-right: 7px;
            margin-left: 4px;
          }
        }
        
        &__btn {
          padding: 12px 9px;
        }
      }
      
      &-share {
        &__container {
          flex: 1;
          padding: 25px 16px 11px;
        }
        
        &__image {
          width: 71%;
          &_wrap {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        &__rewards {
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: var(--black);

          &_wrap {
            margin-bottom: 17px;
          }
        }

        &__ref {
          padding-top: 24px;
        }

        &__icon {
          width: 16px;
          margin: 0 11px;
        }
      }
    }
  }
`;
