import styled from 'styled-components';

export const RecommendedWrapper: any = styled.div`
  .available {

    &-container {
      overflow: auto;
      flex: 0 0 100%;
      flex-wrap: nowrap;
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
      flex: 0 0 calc(32.5% - 1rem);

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

  @media only screen and (max-width: 48.1em) { //768px
    .available {
      &-card {
        flex: 0 0 calc(66.66667% - 1rem);
        background-image: none!important;
        
        &__content {
          padding: 18px 16px 9px;
        }

        &__title {
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
        }
        
        &__list {
          margin-bottom: 15px;
          
          &_item {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
          }
        }
        
        &__price {
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 8px;
        }
      }
    }
  }
`;
