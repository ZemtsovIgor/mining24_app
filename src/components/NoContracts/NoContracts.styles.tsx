import styled from 'styled-components';

export const NoContractsWrapper: any = styled.div`
  background: var(--white);
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 22px 24px 17px;
  font-family: var(--montserrat);
  
  .contracts {
    &__wrap {
      display: flex;
      width: 100%;
    }

    &__container {
      padding: 0;
      width: 100%;
    }

    &__cell {
    }

    &__image {
      &-wrap {
        display: flex;
      }
    }
    
    &__ref {
      text-align: left;
      margin-left: 45px;
      margin-top: 45px;
    }

    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);

      &-wrap {
        margin-bottom: 0;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      color: var(--black);
      padding: 0;
      margin: 0;

      &-wrap {
        display: flex;
        margin-top: 3px;
      }
    }

    &__btn {
      background: var(--light-green);
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      padding: 12px 18px;
      border-radius: var(--border-radius);
      color: var(--white);
      
      &-wrap {
        margin-top: 12px;
      }
    }
  }

  @media only screen and (max-width: 48.1em) {
    flex: 1;
    padding: 19px 10px 19px;
    .contracts {
      
      &__container {
        flex: 1;
      }
      
      &__image {
        width: 89%;
        &_wrap {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 25px;
          margin-bottom: 12px;
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
        margin-top: 15px;
        margin-left: 5px;
        margin-right: 5px;
      }
      
      &__title {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        
        &-wrap {
        }
      }

      &__text {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-top: 8px;

        &-wrap {
        }
      }
      
      &__btn {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        padding: 12px 10px;
        width: 100%;
        text-align: center;
      }
    }
  }
`;
