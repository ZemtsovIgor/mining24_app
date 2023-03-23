import styled from 'styled-components';

export const NoContractsWrapper: any = styled.div`
  background: var(--white);
  box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 32px;
  
  .contracts {
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
      &-wrap {
        display: flex;
      }
    }
    
    &__ref {
      text-align: left;
    }

    &__title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);

      &-wrap {
        margin-bottom: 9px;
      }
    }

    &__text {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: var(--black);

      &-wrap {
        display: flex;
        margin-top: 20px;
      }
    }

    &__btn {
      background: var(--light-green);
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      padding: 16px 24px;
      border-radius: var(--border-radius);
      color: var(--white);
      
      &-wrap {
        margin-top: 20px;
      }
    }
  }
`;
