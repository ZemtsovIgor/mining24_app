import styled from 'styled-components';

export const TransactionsContainer: any = styled.div`
  
  .transactions {
    &__button {
      padding: 10px 30px;
      
      &-wrap {
        margin-top: 25px;
      }
    }
  }

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

  @media only screen and (max-width: 48.1em) {
    .home {
      &-title {
        &_wrap {
          margin-top: 25px;
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

    .transactions {
      &__button {
        width: 100%;
        padding: 10px 30px;
      }
    }
  }
`;
