import styled from 'styled-components';

export const ContractContainer: any = styled.div`
  display: flex;
  flex-direction: column;

  .home {
    &-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: var(--black);

      &_wrap {
        margin-top: 40px;
        margin-bottom: 21px;
      }
    }
  }
  
  .contracts {
    &__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      background: var(--white);
      box-shadow: 0 4px 28px rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      padding: 32px;
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

    &__btn {
      background: var(--light-green);
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      padding: 16px 22px;
      border-radius: var(--border-radius);
      color: var(--white);

      &-wrap {
        margin-top: 18px;
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
        margin-top: -3px;
        margin-bottom: 17px;

        & .home-title {
          font-weight: 700;
          font-size: 28px;
          line-height: 36px;
          color: var(--black);
        }
      }
    }

    .contracts {
      &__title {
        &-wrap {
          text-align: center;
        }
      }
    }
  }
`;

export const ContractItemContainer: any = styled.div`
  .title {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: var(--black);
    &-wrap {
      
    }
  }
  
  .chart-wrap {
    background: var(--white);
    border-radius: 10px;
    padding: 24px;
  }
  
  .btn {
    background: none;
    border: 0;
    color: #C50A0A;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    margin-top: 20px;
  }
  
  .modal-btn {
    flex: 1;
  }
`;
