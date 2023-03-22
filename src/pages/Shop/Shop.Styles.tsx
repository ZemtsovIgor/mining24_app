import styled from 'styled-components';

export const ShopContainer: any = styled.div`
  display: flex;
  flex-direction: column;

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
        padding: 24px 24px 16px;
      }
      
      &__title {
        display: block;
        font-weight: 700;
        font-size: 28px;
        line-height: 36px;
        color: var(--black);
        margin-bottom: 8px;
      }
      
      &__list {
        list-style: none;
        margin-bottom: 24px;
        
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
        background-position: 91% 50%;
      }
      &.-medium {
        background-image: url('/img/main/medium.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 91% 50%;
      }
      &.-expert {
        background-image: url('/img/main/expert.svg');
        background-repeat: no-repeat;
        background-size: auto;
        background-position: 91% 50%;
      }
    }
  }
`;
