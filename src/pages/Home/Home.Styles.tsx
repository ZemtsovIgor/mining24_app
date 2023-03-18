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
  }
  
  .wallet {
    &-refill {
      background: var(--white);
      box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      padding: 32px;
      
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
      }
      
      &__btns {
      }
      
      &__btn {
        display: flex;
        width: 100%;
        background: conic-gradient(from 194.89deg at 30.26% -12.73%, rgba(0, 250, 70, 0.13) -66.95deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 142.5deg, rgba(0, 10, 250, 0.13) 217.5deg, rgba(0, 250, 70, 0.13) 293.05deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 234.81deg at 102.25% 28.97%, rgba(0, 250, 70, 0.13) -136.87deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 250, 70, 0.13) 223.13deg, rgba(255, 255, 255, 0) 365.23deg), conic-gradient(from 223.81deg at 103.05% -6.34%, rgba(250, 225, 0, 0.13) -67.77deg, rgba(255, 255, 255, 0) 5.23deg, rgba(176, 252, 80, 0.1) 61.72deg, rgba(74, 181, 179, 0.117441) 135.62deg, rgba(0, 130, 250, 0.13) 244.86deg, rgba(250, 225, 0, 0.13) 292.23deg, rgba(255, 255, 255, 0) 365.23deg), #F5F9FF;
        border-radius: 7px;
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #00CF3D;
        align-items: center;
        
        &_icon {
          margin-right: 8px;
        }
        
        &.-green {
          background: linear-gradient(94.02deg, rgba(255, 255, 255, 0.29) 0%, rgba(255, 255, 255, 0) 100%), #1BE046;
          color: var(--white);
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
        padding: 37px 33px;
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
      }
      
      &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: var(--black);
        
        &_wrap {
          margin-bottom: 10px;
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
  
  .contracts {
    background: var(--white);
    border-radius: 10px;
    padding: 31px 29px;
    width: 100%;
    flex-direction: column;
    gap: 13px;

    &:nth-child(1) {
      border-top-right-radius: 40px;
      border-top-left-radius: 40px;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 900px) {
      overflow: hidden;
      overflow-x: scroll;
    }
    
    &-header {
      font-weight: 700;
      font-size: 14px;
      line-height: 24px;
      color: var(--black);
      cursor: pointer;
      height: 45px;
      display: flex;
      align-items: center;
      
      &__wrap {
        display: grid;
        grid-gap: 1em;
        align-items: center;
        margin-bottom: 10px;
        border-bottom: 1px solid #EFEFEF;

        grid-template-columns: 2fr repeat(4, 1fr);

        @media screen and (max-width: 900px) {
          width: 770px;
          grid-template-columns: 2fr repeat(4, 1fr);
          > *:first-child {
            display: none;
          }
        }
      }
    }
    
    &-body {
      &__wrap {
        display: flex;
        flex-direction: column;
      }
      
      &__row {
        display: grid;
        grid-gap: 1em;
        margin: 20px 0;

        grid-template-columns: 2fr repeat(4, 1fr);

        @media screen and (max-width: 900px) {
          width: 770px;
          grid-template-columns: 2fr repeat(4, 1fr);
          > *:first-child {
            display: none;
          }
        }
      }
      
      &__cell {
        display: flex;
      }
      
      &_text {
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--black);
      }
      
      &_chart {
        
      }
    }
  }
  
  .available {
    
    &-container {
      
    }
    
    .price {
      display: block;
      position: relative;
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      color: #060931;
    }

    &-card {
      border-radius: 8px;
      margin-bottom: 1rem;

      &__content {
        padding: 16px;
      }
      
      &__title {
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: var(--black);
        margin-bottom: 8px;
      }
      
      &__list {
        list-style: none;
        margin-bottom: 1rem;
        
        &_item {
          display: block;
          position: relative;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: var(--black);
        }
      }
      
      &__price {
        display: block;
        position: relative;
        margin-bottom: 1rem;
        font-weight: 500;
        font-size: 22px;
        line-height: 28px;
        color: var(--black);
      }
      
      &__btn {
        background: rgba(255, 255, 255, 0.72);
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: var(--black);
        padding: 10px 16px;
        
        &_wrap {
          margin-bottom: 0.5rem;
          width: auto;
        }
      }

      &.-purple {
        background: #EFE7FD;
      }

      &.-green {
        background: #1BE046;

        .available-card {
          &__title {
            color: var(--white);
          }

          &__list_item {
            color: var(--white);
          }

          &__price {
            color: var(--white);
          }
        }
        
      }

      &.-pink {
        background: #FCE4F4;
      }

      &.-blue {
        background: #DDF3F9;
      }

      &.-simple {
        background-image: url('/img/main/simple.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 100% 50%;
      }
      &.-medium {
        background-image: url('/img/main/medium.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 100% 50%;
      }
      &.-expert {
        background-image: url('/img/main/expert.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 100% 50%;
      }
    }
  }
`;
